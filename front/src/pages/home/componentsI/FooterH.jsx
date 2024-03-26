import { React, useEffect, useState } from 'react';

function FooterH() {
    const { orders, setOrder } = useState([]);
    var tbItemCar = [];
    if (localStorage.mytbItemCar) {
        tbItemCar = JSON.parse(localStorage.getItem("mytbItemCar"));
    }

    // useEffect(() => {
    //     fetch('http://localhost/routes/orders.php?action=getitem')
    //     .then(response => response.json())
    //     .then(data => {
    //         setOrder(data);
    //     })
    // }, []);

    async function postCar(bodyContent) {
        const formData = new FormData();
        formData.append("order_code", bodyContent.order_code);
        formData.append("product_code", bodyContent.product_code);
        formData.append("amount", bodyContent.amount);
        formData.append("price", bodyContent.price);
        formData.append("tax", bodyContent.tax);

        const response = await fetch(
            "http://localhost/routes/orders.php?action=postitem",
            {
                method: "POST",
                body: formData,
            }
        );
    }

    async function joinOrders() {
        if (tbItemCar.length > 0) {
            let getTotal = document.getElementById("total2").value;
            let getTax = document.getElementById("tax2").value;
            let carrinho = JSON.parse(localStorage.getItem("mytbItemCar"));
            let data = new FormData();
            let orderCode;
            data.append("totalF", getTotal.split("$")[1]);
            data.append("taxF", getTax.split("$")[1]);

            let response = fetch(`http://localhost/routes/orders.php?action=post`, {
                method: "POST",
                body: data,
            });

            orderCode = await response.then((res) => res.json());
            carrinho.forEach((produto) => {
                postCar({
                    order_code: orderCode.code,
                    product_code: produto.id,
                    amount: parseInt(produto.newAmountCar),
                    price: parseFloat(produto.newUpCar),
                    tax: parseFloat(produto.newTaxCar),
                });
            });

            menosProdStok();
            setTimeout(() => {
                localStorage.removeItem("mytbItemCar");
                tbItemCar = [];
            }, 700);
        } else {
            alert("No items in the cart to finish!");
        }
    }

    function cancel() {
        if (tbItemCar.length >= 1) {
            localStorage.mytbItemCar = JSON.stringify(tbItemCar);
            localStorage.removeItem("mytbItemCar");
            tbItemCar = [];

        } else {
            alert("Nenuma compra em andamento");
            return;
        }
        window.location.reload(false)
    }

    function menosProdStok() {
        fetch("http://localhost/routes/products.php?action=get")
          .then((response) => response.json())
          .then((data) => {
            const carts = JSON.parse(localStorage.getItem("mytbItemCar"));
            data.forEach((itemBanco) => {        
              carts.forEach((itemC) => {
                if (itemC.newProdCar == itemBanco[0]) {
                  var code = itemC.newProdCar;
                  var amountProd = parseInt(itemBanco.amount);
                  var amountCart = parseInt(itemC.newAmountCar);
      
                  var amount = amountProd - amountCart;
      
                  if (amount < amountCart) {
                    alert(`Quantidade não disponivel ${itemBanco[1]}, se quiser continuar a compra clique em ok porém ${itemBanco[1]}não será enviado`);
                    return;
                  } else {
                    let dataC = new FormData();
                    dataC.append("amount", JSON.stringify(parseInt(amount)));
                    dataC.append("code", JSON.stringify(parseInt(code)));
      
                    fetch(`http://localhost/routes/orders.php?action=updateproduct`, {
                      method: "POST",
                      body: dataC,
                    });
                    return true;
                  }
                }
              });
            });
          });
      }

    return (
        <>
            <div className="direito">
                <label>Tax: <input type="text" id="tax2" className="tax2" name="taxF" placeholder="$0.00" disabled step="any" /></label><br />
                <label>Total: <input type="text" id="total2" className="total2" name="totalF" placeholder="$0.00" disabled step="any" /></label>
            </div>
            <div className="direito2">
                <input type="submit" onClick={cancel} className="cancel" value="Cancel" />
                <button type="submit" onClick={joinOrders} className="finish" value="Finish">Finhish</button>
            </div>
        </>
    );
}

export default FooterH;