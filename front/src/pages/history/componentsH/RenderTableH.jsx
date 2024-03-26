import { React, useState, useEffect } from 'react';

function RenderTableH({ item }) {

    function detailBtn() {
        fetch("http://localhost/routes/orders.php?action=getitem")
            .then((res) => res.json())
            .then((data) => {
    
                fetch("http://localhost/routes/orders.php?action=get")
                    .then(testeRes => testeRes.json())
                    .then(dataTeste => {
    
                        var order_code
                        var nameProd
                        var amountProd
                        var priceProd
                        var taxProd
                        var totalProd
                        var textoProdutosAlert = ''
    
                        dataTeste.forEach(testDet => {
                            if (testDet.code == item[0]) {
                                data.forEach(det => {
                                    if (det.order_code == item[0]) {
    
                                        order_code = det.order_code
                                        nameProd = det.name
                                        amountProd = det[3]
                                        priceProd = det.price
                                        taxProd = det.tax / 100 * priceProd
                                        totalProd = amountProd * priceProd + taxProd
                                        textoProdutosAlert += `Produto: ${nameProd}; Qtd: ${amountProd} UND; Price: $${priceProd}; Tax: $${taxProd.toFixed(2)}; Total:$${totalProd.toFixed(2)}\n`
                                        return
                                    }
                                });
                            }
                        });
                        alert(`Compra: ${order_code}; Produtos: \n${textoProdutosAlert}`)
                    });
            });
    }

    var total = parseFloat(item.total)
    var tax = parseFloat(item.tax)
    var ttG = total + tax

    return (
        <>
            <tr>
                <td>{item[0]}<p>Total geral:{ttG.toFixed(2)} <button className='deletHisto' onClick={detailBtn} >More Detail</button></p></td>
                <td>${item.tax}</td>
                <td>${item.total}</td>
            </tr>
        </>
    );
}

export default RenderTableH;