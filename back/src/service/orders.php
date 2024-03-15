<?php
include "../config.php";

//-----orders-----
function postCar($myPDO, $total, $tax){

    $carrinhoPost = $myPDO->prepare("INSERT INTO orders (total, tax) VALUES (:total, :tax)");
    $carrinhoPost -> bindParam(":total", $total);
    $carrinhoPost -> bindParam(":tax", $tax);
    $carrinhoPost -> execute();
}

function getCar($myPDO){
    $carrinho = $myPDO->query("SELECT MAX (code) FROM orders");
    $data = $carrinho->fetchAll();
    return print_r(json_encode($data));
}

function delCar($myPDO){
    $carrinho = $myPDO->query("DELETE FROM orders WHERE code=" .$_REQUEST["code"]);
}


//-----order_item-----
function postCarItem($myPDO, $order_code, $product_code, $amount, $price, $tax){
    $carrinhoPostItem = $myPDO->prepare("INSERT INTO order_item (order_code, product_code, amount, price, tax) VALUES (:order_code, :product_code, :amount, :price, :tax)");
    $carrinhoPostItem -> bindParam(":order_code", $order_code);
    $carrinhoPostItem -> bindParam(":product_code", $product_code);
    $carrinhoPostItem -> bindParam(":amount", $amount);
    $carrinhoPostItem -> bindParam(":price", $price);
    $carrinhoPostItem -> bindParam(":tax", $tax);
    $carrinhoPostItem -> execute();
}

function getCarItem($myPDO){
    $carrinhoItem = $myPDO -> query("SELECT * FROM order_item INNER JOIN products ON product_code = products.code");
    $data = $carrinhoItem->fetchAll();
    return print_r(json_encode($data));
}

function orderMax($myPDO){
    $orderMax = $myPDO -> preoare("INSERT INTO order_item INNER JOIN orders ON order_code = orders.code");
    $data = $orderMax -> fetchAll();
    return print_r(json_encode($data));
}

function delCarItem($myPDO){
    $carrinhoItem = $myPDO->query("DELETE FROM order_item WHERE code=" .$_REQUEST["code"]);
}

