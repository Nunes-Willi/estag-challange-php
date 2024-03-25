import React from 'react';

function RenderTableI({item}) {
    var tbItemCar = []
    if (localStorage.mytbItemCar) {
        tbItemCar = JSON.parse(localStorage.getItem("mytbItemCar"));
        
    }
    function delet(id) {
        tbItemCar = tbItemCar.filter(product => product.id !== id);
        localStorage.mytbItemCar = JSON.stringify(tbItemCar);
      }
    return ( 
        <tr>
            <td>{item.id}</td>
            <td>{item.newProdCar}</td>
            <td>{item.newAmountCar}</td>
            <td>{item.newTaxCar}</td>
            <td>{item.newUpCar}</td>
            <td>SubTotal</td>
            <td>
                <input type="button" className='delet' value='Delete' onClick={() => delet(item.id)}/>
            </td>
        </tr>
     );
}

export default RenderTableI;