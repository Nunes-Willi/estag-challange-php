import React from 'react';

function FormC() {
    return (
        <>
            <div className="add_category">
                <form onsubmit="postCateg(event)" id="categoryForm">
                    <input type="text" className="category" name="name" id="input-category" placeholder="Category" /><br />
                    <input type="number" min="0.01" step="any" className="tax_cat" name="tax" id="input-tax" placeholder="Tax" /><br />
                    <button type="submit" className="add">Add Category </button>
                </form>
            </div>
        </>
    );
}

export default FormC;