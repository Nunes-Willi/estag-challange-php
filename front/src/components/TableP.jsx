import React from 'react';

function TableP() {
    return (
        <>
            <div className="tableP">
                <table id="tbprod">
                    <tr>
                        <th className="first_colum">Code</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    <tbody id="tbody"></tbody>
                </table>
            </div>
        </>
    );
}

export default TableP;