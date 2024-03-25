import { React, useEffect, useState } from 'react';

import RenderTableI from './RenderTableI';

function TableI() {

    const [itens, setItens] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("mytbItemCar") === null) {
            return;
        } else {
            setItens(JSON.parse(localStorage.getItem('mytbItemCar')))
        }
    }, []);
    // useEffect(() => {
    //     fetch('http://localhost/routes/orders.php?action=getitem')
    //     .then(response => response.json())
    //     .then(data => {
    //         setCarts(data);
    //     })
    // }, []);
    return (
        <>
            <div className="tableI">
                <table id="tbcar">
                    <thead>
                        <tr>
                            <th className="first_colum">Code</th>
                            <th>Product Code</th>
                            <th>Amount</th>
                            <th>Tax</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {itens.map((item) => (
                            <RenderTableI item={item} key={item.id} />
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default TableI;