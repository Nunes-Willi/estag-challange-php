<?php
include ("../config.php");

  //Posta uma categoria
  function postCateg($myPDO) {
    $name = $_POST["name"];
    $tax = $_POST["tax"];

    $categoriesPost = $myPDO->prepare("INSERT INTO categories (name, tax) VALUES ('{$name}', '{$tax}')");
    $categoriesPost->execute();
}

//Busca todas as categorias
function getCateg($myPDO) {
    $categories = $myPDO->query("SELECT * FROM categories");
    $data = $categories->fetchALL();
    return print_r(json_encode($data));
}

// Deleta uma categoria
function delCateg($myPDO) {
    $category = $myPDO->query("DELETE FROM categories WHERE code=" .$_REQUEST["code"]);
    // $category ->execute();
}

