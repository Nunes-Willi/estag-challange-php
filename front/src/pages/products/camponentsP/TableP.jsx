import { React, useEffect, useState } from 'react';

import RenderTableP from './RenderTableP';

function TableP() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        fetch('http://localhost/routes/products.php?action=get')
            .then(responseP => responseP.json())
            .then(dataP => {
                setItens(dataP);
            })
    }, []);
    return (
        <>
            <div className="tableP">
                <table id="tbprod">
                    <thead>
                        <tr>
                            <th className="first_colum">Code</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {itens.map((item) => (
                            <RenderTableP item={item} key={item[0]} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableP;