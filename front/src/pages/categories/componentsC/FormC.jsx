import React from 'react';

function FormC() {
    async function postCateg(event) {
        event.preventDefault();
        const category = new FormData(document.getElementById("categoryForm"));
        const response = await fetch(
            "http://localhost/routes/categories.php?action=post",
            {
                method: "POST",
                body: category,
            },
            window.location.reload(false)
        );
    }
    return (
        <>
            <div className="add_category">
                <form onSubmit={postCateg} id="categoryForm">
                    <input type="text" className="category" name="name" id="input-category" placeholder="Category" /><br />
                    <input type="number" min="0.01" step="any" className="tax_cat" name="tax" id="input-tax" placeholder="Tax" /><br />
                    <button type="submit" className="add">Add Category </button>
                </form>
            </div>
        </>
    );
}

export default FormC;