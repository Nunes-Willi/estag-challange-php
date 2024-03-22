import React from 'react';

function TableH() {
    return (
        <>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Tax</th>
                    <th>Total</th>
                </tr>
                <tbody id="tbody"></tbody>
            </table>
            {/* <div className='y'>
                <h3 style={{ color: "rgb(245, 65, 65)" }}>PS: Para ver mais detalhes de
                    sua compra, passe com o mouse sob o code!</h3>
            </div> */}
        </>
    );
}

export default TableH;