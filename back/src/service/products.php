<?php
include "../config.php";

function postProd($myPDO){
    $name = $_POST["name"];
    $amount = $_POST["amount"];
    $price = $_POST["price"];
    $category_code = $_POST["category_code"];

    $productsPost = $myPDO->prepare("INSERT INTO products (name, amount, price, category_code) VALUES (:name, :amount, :price, :category_code)");
    $productsPost->bindParam(":name", $name);
    $productsPost->bindParam(":amount", $amount);
    $productsPost->bindParam(":price", $price);
    $productsPost->bindParam(":category_code", $category_code);
    $productsPost -> execute();
}

function getProd($myPDO){
    $products = $myPDO->query("SELECT * FROM products INNER JOIN categories ON category_code = categories.code");
    $data = $products->fetchAll();
    return print_r(json_encode($data));
}

function delProd($myPDO){
    $products = $myPDO->query("DELETE FROM products WHERE code=" .$_REQUEST["code"]);
}