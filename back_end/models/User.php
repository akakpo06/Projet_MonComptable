<?php
class User {
    private $conn;
    public $token;
    public $id;



    public function __construct($db) {
        return $this->conn = $db;
    }

    public function auth($email,$password) {

        $stmt = $this->conn->prepare("SELECT * FROM users WHERE email = :email AND password = :password");
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":password", $password);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->token = openssl_random_pseudo_bytes(16);
        $this->token = bin2hex($this->token);

        if ($result) {
            $this->id = $result["id"];
            $auth = $this->conn->prepare("UPDATE users SET token = :token WHERE email = :email");
            $auth->bindParam(":email", $email);
            $auth->bindParam(":token", $this->token);
            $auth->execute();

            return true;
        }
        else{
            return false;
        }
    }
    public function register($nif,$email,$password) {
        
        $statement = $this->conn->prepare("SELECT COUNT(id) AS 'match' FROM users WHERE email=:email");
        $statement->execute(array("email" => $email));
        $mailCheck = $statement->fetch();

        $statement = $this->conn->prepare("SELECT COUNT(id) AS 'match' FROM users WHERE nif=:nif");
        $statement->execute(array("nif" => $nif));
        $nifCheck = $statement->fetch();


        if($nifCheck["match"] !== "0"){
            return 0;
        }
        elseif ($mailCheck["match"] !== "0") {
            return 1;
        }
        else{
            $sql = "INSERT INTO users (nif, email, password) VALUE (:nif, :email, :password)";
            $stmt = $this->conn->prepare($sql);
    
            $stmt->bindParam(":nif", $nif);
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":password", $password);
    
            if($result = $stmt->execute()) {
                return 2;
            }
            else{
                return 3;
            }
        }
    }
    public function check($token,$id) {
        
        $stmt = $this->conn->prepare("SELECT token FROM users WHERE id = :id");
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            if($result["token"] === $token) {
                return 0;
            }
            else{
                return 1;
            }
        }
        else{
            return 2;
        }
    }
    public function getHistory($id) {

        $stmt = $this->conn->prepare("SELECT nature,amount,period,year,created_at,id FROM paiements WHERE user_id = :user");
        $stmt->bindParam(":user", $id);
        $stmt->execute();
        $result = $stmt->fetchAll();

        if ($result) {
            return $result;
        }
        else{
            return false;
        }
    }
    public function payTax($input) {
        
        $sql = "INSERT INTO paiements (user_id, nature, amount, period, neant, year, paid_by, account_number, expiry_year) 
        VALUE (:user_id, :nature, :amount, :period, :neant, :year, :paid_by, :account_number, :expiry_year)";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(":user_id", $this->id);
        $stmt->bindParam(":nature", $input->nature);
        $stmt->bindParam(":amount", $input->amount);
        $stmt->bindParam(":period", $input->period);
        // $stmt->bindParam(":files", $input->files);
        $stmt->bindParam(":neant", $input->neant);
        $stmt->bindParam(":year", $input->year);
        $stmt->bindParam(":paid_by", $input->paid_by);
        $stmt->bindParam(":account_number", $input->account_number);
        $stmt->bindParam(":expiry_year", $input->expiry_year);

        if($stmt->execute()) {
            return true;
            $response = ["status" => true , "message" => "Record created Successfully."];
        }
        else{
            return false;
            $response = ["status" => false , "message" => "Failed to create record."];
        }
        return; 
    }
    public function disconnect() {

        $disconnect = $this->conn->prepare("UPDATE users SET token = NULL WHERE id =:id");
        $disconnect->bindParam(":id", $this->id);
        $result = $disconnect->execute();
        
        if ($result) {
            return true;
        }
        else{
            return false;
        }
    }
}

?>