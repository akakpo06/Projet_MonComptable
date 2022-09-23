<?php
    require_once "../headers.php";
    require_once "../../config/Database.php";
    require_once "../../models/User.php";

    
    $path = explode("/", $_SERVER["REQUEST_URI"]);
    $inputs = json_decode(file_get_contents("php://input"));

    $database = new Database;
    $db = $database->connect();

    $user = new User($db);
    $user->id = $path[4];

    if ($inputs){
        
        $payTax = $user->payTax($inputs);

        if ($payTax) {

            $response = [
                "status" => true ,
                "message"=>"recorded successfully"
            ];
        }
        else{
            $response = [
                "status" => false ,
                "message"=>"failed to record"
            ];
        }
    }
    echo json_encode($response);
?>