import React from 'react';

function TableP() {
    return (
        <>
            <div className="add_prod">
                <form onsubmit="postProd(event)" id="productForm">
                    <input type="text" className="prodP" name="name" id="input-prod" placeholder="Product" /><br />
                    <input type="number" className="amountP" name="amount" id="input-amount" placeholder="Amount" />
                    <input type="number" min="0.05" step="any" className="upP" name="price" id="input-up" placeholder="Price" />
                    <select name="category_code" className="catP" id="select-category">
                        <option value="Category" disabled selected hidden>Category</option>
                    </select>
                    <button type="submit" className="add">Add Product</button>
                </form>
            </div>
        </>
    );
}

export default TableP;