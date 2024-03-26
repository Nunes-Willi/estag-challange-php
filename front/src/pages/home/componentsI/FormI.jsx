import { React, useState, useEffect } from 'react';

function FormI() {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost/routes/products.php?action=get')
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    var tbItemCar = [];

    function AddCarrrinho() {
        if (localStorage.mytbItemCar) {
            tbItemCar = JSON.parse(localStorage.getItem("mytbItemCar"));
        }

        var newProdCar = document.getElementById("select-product").value;
        var newAmountCar = document.getElementById("input-car-amount").value;
        var newTaxCar = document.getElementById("input-car-tax").value;
        var newUpCar = document.getElementById("input-car-up").value;

        const selectedProduct = JSON.parse(newProdCar);
        const newAmount = selectedProduct.newamount;

        const nwAmnt = parseInt(newAmount);
        const nwAmntCar = parseInt(newAmountCar);

        if (!newUpCar || !newTaxCar || !newAmountCar || newProdCar === "Product") {
            alert("Algum(ns) campo ainda não esta preenchido");
            return;
        }

        if (nwAmnt < nwAmntCar) {
            alert("Quantidade solicitada maior do que o estoque disponível.");
            return;
        } else {
            const isProductInCart = tbItemCar.some(
                (item) => item.newProdCar === newProdCar
            );

            if (isProductInCart) {
                alert("Este item já está no carrinho.");
                return;
            }

            const newElementCar = {
                id: tbItemCar.length + 1,
                newProdCar,
                newAmountCar,
                newTaxCar,
                newUpCar,
            };
            console.log("🚀 ~ AddCarrrinho ~ newElementCar:", newElementCar)


            if (localStorage.getItem("mytbItemCar") === null) {
                localStorage.setItem(("mytbItemCar"), JSON.stringify([newElementCar]))
            } else {
                localStorage.setItem("mytbItemCar", JSON.stringfy([...JSON.parse(localStorage.getItem("mytbItemCar")), newElementCar]));
            }

            document.getElementById("input-car-amount").value = "1";
            document.getElementById("select-product").value = "Product";
            document.getElementById("input-car-tax").value = "";
            document.getElementById("input-car-up").value = "";
        }
    }

    function pegaValorInput(event) {
        fetch("http://localhost/routes/products.php?action=get")
            .then((response) => response.json())
            .then((data) => {
                data.find((prod) => {
                    if (event.target.value == prod[0]) {
                        var price = document.getElementById("input-car-up");
                        var tax = document.getElementById("input-car-tax");

                        price.value = JSON.parse(prod.price);
                        tax.value = JSON.parse(prod.tax);
                    }
                });
            });
    }

    return (
        <>
            <div className="add_prod_car">
                <form /*onsubmit={postCar(event)}*/ id="carrinhoForm">
                    <select className="prodI" name="product_code" id="select-product" onChange={pegaValorInput}>
                        {products.map((product) => (
                            <option key={product[0]} value={product[0]}>{product[1]}</option>
                        ))}
                    </select>
                    <input type="number" min="1" className="amountI" name="amount" id="input-car-amount" placeholder="Amount" />
                    <input disabled step="any" type="number" className="taxI" name="tax" id="input-car-tax" placeholder="Tax" />
                    <input disabled step="any" type="number" className="upI" name="price" id="input-car-up" placeholder="Price" /> <br />
                    <input className="add" type="button" onClick={AddCarrrinho} value='Add Product' />
                </form>
            </div>
        </>
    );
}

export default FormI;