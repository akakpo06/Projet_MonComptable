<?php
    require_once "../headers.php";
    require_once "../../config/Database.php";
    require_once "../../models/User.php";

    $inputs = json_decode(file_get_contents("php://input"));

    $database = new Database;
    $db = $database->connect();

    $user = new User($db);

    if ($inputs){
        
        $getHistory = $user->getHistory($inputs->id);

        if ($getHistory) {
            $response = [
                "status" => true ,
                "history"=> $getHistory
            ];
        }
        else{
            $response = [
                "status" => false ,
                "message"=>"Votre historique est vide"
            ];

        }
    }
    echo json_encode($response);
?>