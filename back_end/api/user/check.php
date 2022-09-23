<?php
    require_once "../headers.php";
    require_once "../../config/Database.php";
    require_once "../../models/User.php";

    $inputs = json_decode(file_get_contents("php://input"));

    $database = new Database;
    $db = $database->connect();

    $user = new User($db);

    if ($inputs){
        
        $check = $user->check($inputs->token,$inputs->id);

        if ($check === 0) {
            $response = [
                "status" => true ,
                "message"=>"authentifié"
            ];
        }
        elseif ($check === 1){
            $response = [
                "status" => false ,
                "message"=>"incompatibilité des tokens",
                "result" => $check
            ];
        }
        elseif ($check === 2){
            $response = [
                "status" => false ,
                "message"=>"problème de connexion à la base"
            ];
        }
        else{
            $response = [
                "status" => false ,
                "message"=>"erreur de connexion dans le code"
            ];

        }
    }
    echo json_encode($response);
?>