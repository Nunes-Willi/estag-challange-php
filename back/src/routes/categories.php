<?php
include "../service/categories.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header ('Acess-Control-Allow-Method: GET, DELETE, POST');

switch($_REQUEST["action"]){
    case 'post':
    postCateg(($myPDO));
    echo ("<script> history.back();</script>");
    break;

    case 'get';
    getCateg($myPDO);
    break;

    case 'delete':
        try {
            delCateg(($myPDO));
            echo ("<script> history.back();</script>");

        } catch (Exception $e){
            echo "HMMMMMMMM (Comentário Bovino)";
            echo '<button onclick="history.back()">Come Back</button>';
        }
        break;
}
