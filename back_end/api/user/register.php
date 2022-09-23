<?php 
    require_once "../headers.php";
    require_once "../../config/Database.php";
    require_once "../../models/User.php";

    $inputs = json_decode(file_get_contents("php://input"));

    $database = new Database;
    $db = $database->connect();

    $user = new User($db);

    if ($inputs) {
        
        $register = $user->register($inputs->nif,$inputs->email,$inputs->password);

        if ($register === 0) {

            $response = [
                "status" => false ,
                "message"=>"Nif incorrect ou déja inscrit"
            ];
            
        }
        elseif ($register === 1) {

            $response = [
                "status" => false ,
                "message"=>"Email incorrect ou déja inscrit"
            ];
        }
        elseif($register === 2){

            $response = [
                "status" => true ,
                "message"=>"inscrit avec succès"
            ];
        }
        elseif($register === 3){

            $response = [
                "status" => false ,
                "message"=>"echec de l'inscription"
            ];
        }
    }

echo json_encode($response);
?>