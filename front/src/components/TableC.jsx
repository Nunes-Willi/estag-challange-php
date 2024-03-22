import React from 'react';

function TableC() {
    return ( 
        <>
            <div className="tableC">
            <table id="table">
                <thead>
                    <tr>
                        <th className="first_colum">Code</th>
                        <th>Category</th>
                        <th>Tax</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="tbody"></tbody>
            </table>
        </div>
        </>
     );
}

export default TableC;