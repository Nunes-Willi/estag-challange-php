import { React, useEffect, useState } from 'react';

function TableP() {

    const [categories, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost/routes/categories.php?action=get')
            .then(response => response.json())
            .then(data => {
                setCategory(data);
            })
    }, []);

    async function postProd(event) {
        event.preventDefault();
        const product = new FormData(document.getElementById("productForm"));
        const response = await fetch(
            "http://localhost/routes/products.php?action=post",
            {
                method: "POST",
                body: product,
            },
            window.location.reload(false)
        );
    }
    return (
        <>
            <div className="add_prod">
                <form onSubmit={postProd} id="productForm">
                    <input type="text" className="prodP" name="name" id="input-prod" placeholder="Product" /><br />
                    <input type="number" className="amountP" name="amount" id="input-amount" placeholder="Amount" />
                    <input type="number" min="0.05" step="any" className="upP" name="price" id="input-up" placeholder="Price" />
                    <select name="category_code" className="catP" id="select-category">
                        {categories.map((category) => (
                            <option key={category.code} value={category.code}>{category.name}</option>
                        ))}
                    </select>
                    <button type="submit" className="add">Add Product</button>
                </form>
            </div>
        </>
    );
}

export default TableP;