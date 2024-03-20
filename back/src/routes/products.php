<?php
include "../service/products.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header ('Access-Control-Allow-Method: GET, DELETE, POST');

switch($_REQUEST["action"]){
    case 'post':
    postProd(($myPDO));
    echo ("<script> history.back();</script>");
    break;

    case 'get';
    getProd($myPDO);
    break;

    case 'delete':
        try {
            delProd(($myPDO));
            echo ("<script> history.back();</script>");

        } catch (Exception $e){
            echo "Erro ao tentar excluir produto. Produto em um carrinho";
            echo '<button onclick="history.back()">Come Back</button>';
        }
        break;

        
}