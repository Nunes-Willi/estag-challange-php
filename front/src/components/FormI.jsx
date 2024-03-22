import React from 'react';

function FormI() {
    return (
        <>
            <div className="add_prod_car">
                <form onsubmit="postCar(event)" id="carrinhoForm">
                    <select className="prodI" name="product_code" id="select-product" onchange="pegaValorInput(event)" required>
                        <option value="Product" disabled selected hidden>Product</option>
                    </select>
                    <input type="number" min="1" value="1" className="amountI" name="amount" id="input-car-amount" placeholder="Amount" />
                    <input disabled="true" step="any" type="number" className="taxI" name="tax" id="input-car-tax" placeholder="Tax" />
                    <input disabled="true" step="any" type="number" className="upI" name="price" id="input-car-up" placeholder="Price" /> <br />
                    <button className="add" type="submit" onclick="AddCarrrinho()">Add Product</button>
                </form>
            </div>
        </>
    );
}

export default FormI;