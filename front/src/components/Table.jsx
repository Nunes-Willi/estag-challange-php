import React from 'react';

function TableI() {
    return (

        <>
            <div className="tableI">
                <table id="tbcar">
                    <tr>
                        <th className="first_colum">Code</th>
                        <th>Product Code</th>
                        <th>Amount</th>
                        <th>Tax</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    <tbody id="tbody"></tbody>
                </table>

            </div>
        </>
    );
}

export default TableI;