<?php
    require_once "../headers.php";
    require_once "../../config/Database.php";
    require_once "../../models/User.php";

    $path = explode("/", $_SERVER["REQUEST_URI"]);

    $database = new Database;
    $db = $database->connect();

    $user = new User($db);

    $user->id = $path[4];

    if ($user->id){

        $disconnect = $user->disconnect();

        if ($disconnect) {
            $response = [
                "status" => true ,
                "message"=>"disconnected successfully"
            ];
        }
        else{
            $response = [
                "status" => false ,
                "message"=>"failed to disconnect"
            ];
        }
    }
    echo json_encode($response);
?>