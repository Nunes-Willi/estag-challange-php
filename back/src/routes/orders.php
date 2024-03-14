<?php
include "../service/orders.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header ('Access-Control-Allow-Method: GET, DELETE, POST');

switch ($_REQUEST['action']){
    case 'post';
    postCar($myPDO);
    echo ("<script>history.back();</script>");
    break;

    case 'get';
    getCar($myPDO);
    break;

    case 'delete';
    try {
        delCar($myPDO);
        echo ("<script>history.back();</script>");
    } catch (Exception $e){
        echo "HMMMMMMMMMMMM (Comentário Bovino)";
        echo '<button onclick="history.back()">Come Back</button>';
    }

    case 'postitem';
    $product_code = $_POST["product_code"];
    $amount = $_POST["amount"];
    $price = $_POST["price"];
    $tax = $_POST["tax"];
    postCarItem($myPDO, $product_code, $amount, $price, $tax);
    echo ("<script>history.back();</script>");
    break;

    case 'getitem';
    getCarItem($myPDO);
    break;

    case 'deleteitem':
        try {
            delCarItem(($myPDO));
            echo ("<script> history.back();</script>");

        } catch (Exception $e){
            echo "HMMMMMMMM (Comentário Bovino)";
            echo '<button onclick="history.back()">Come Back</button>';
        }
        break;
}