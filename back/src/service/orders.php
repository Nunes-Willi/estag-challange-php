<?php
include "../config.php";

//-----orders-----
function postCar($myPDO){
    $total = $_POST['totalF'];
    $tax = $_POST['taxF'];

    $carrinhoPost = $myPDO->prepare("INSERT INTO orders (total, tax) VALUES ('{$total}', '{$tax}')");
    $carrinhoPost -> execute();
}

function getCar($myPDO){
    $carrinho = $myPDO->query("SELECT * FROM orders");
    $data = $carrinho->fetchAll();
    return print_r(json_encode($data));
}

function delCar($myPDO){
    $carrinho = $myPDO->query("DELETE FROM orders WHERE code=" .$_REQUEST["code"]);
}


//-----order_item-----
function postCarItem($myPDO, $product_code, $amount, $price, $tax){
    $carrinhoPostItem = $myPDO->prepare("INSERT INTO order_item (order_code, product_code, amount, price, tax) VALUES (1, {$product_code}, {$amount}, {$price}, {$tax})");
    $carrinhoPostItem -> execute();
}

function getCarItem($myPDO){
    $carrinhoItem = $myPDO -> query("SELECT * FROM order_item INNER JOIN products ON product_code = products.code");
    $data = $carrinhoItem->fetchAll();
    return print_r(json_encode($data));
}

function delCarItem($myPDO){
    $carrinhoItem = $myPDO->query("DELETE FROM order_item WHERE code=" .$_REQUEST["code"]);
}

