import {React, useEffect, useState,} from 'react';

import RenderTableH from './RenderTableH';

function TableH() {

    const [itensH, setItensH] = useState([]);

    useEffect(() => {
        fetch('http://localhost/routes/orders.php?action=get')
        .then(responseH => responseH.json())
        .then(dataH => {
            setItensH(dataH);
        })
    }, []);

    return (
        <>
            <table>
                <thead>

                    <tr>
                        <th>Code</th>
                        <th>Tax</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {itensH.map((item) => (
                        <RenderTableH item={item} key={item[0]}/>
                    ))}
                </tbody>
            </table> 
        </>
    );
}

export default TableH;