import { React, useEffect, useState } from 'react';

import RenderTableC from './RenderTableC';

function TableC() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        fetch('http://localhost/routes/categories.php?action=get')
        .then(responseC => responseC.json())
        .then(dataC => {
            setItens(dataC);
        })
    }, []);

    // async function postCateg(event) {
    //     event.preventDefault();
    //     const category = new FormData(document.getElementById("categoryForm"));
    //     const response = await fetch(
    //       "http://localhost/routes/categories.php?action=post",
    //       {
    //         method: "POST",
    //         body: category,
    //       },
    //       window.location.reload()
    //     );
    //   }

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
                <tbody id="tbody">
                    {itens.map((item) => (
                        <RenderTableC item={item} key={item.code}/>
                    ))}
                </tbody>
            </table>
        </div>
        </>
     );
}

export default TableC;