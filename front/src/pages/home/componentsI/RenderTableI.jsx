import React from 'react';

function RenderTableI({ item }) {
    var tbItemCar = []
    if (localStorage.mytbItemCar) {
        tbItemCar = JSON.parse(localStorage.getItem("mytbItemCar"));

    }
    function delet(id) {
        tbItemCar = tbItemCar.filter(product => product.id !== id);
        localStorage.mytbItemCar = JSON.stringify(tbItemCar);
        window.location.reload(false)
    }

    var azul = (item.newTaxCar / 100) * item.newUpCar +
        item.newAmountCar * item.newUpCar;

    function updateTaxAndTotalFinal() {
        var taxFinal = 0;
        var totalFinal = 0;

        tbItemCar.forEach((itemC) => {
            taxFinal += parseFloat((itemC.newTaxCar / 100) * itemC.newUpCar);
            totalFinal += itemC.newAmountCar * itemC.newUpCar;

            document.querySelector("#tax2").value = `$${taxFinal.toFixed(2)}`;
            document.querySelector("#total2").value = `$${totalFinal.toFixed(2)}`;

            localStorage.mytbItemCar = JSON.stringify(tbItemCar);
        });
    }
    updateTaxAndTotalFinal()
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.newProdCar}</td>
            <td>{item.newAmountCar}</td>
            <td>{item.newTaxCar}</td>
            <td>{item.newUpCar}</td>
            <td>{azul.toFixed(2)}</td>
            <td>
                <input type="submit" className='delet' value='Delete' onClick={() => delet(item.id)} />
            </td>
        </tr>
    );
}

export default RenderTableI;