import React from 'react';

function RenderTableP({ item }) {
    var price = parseFloat(item.price)
    return (
        <tr>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item.amount} UND</td>
            <td>${price.toFixed(2)}</td>
            <td>{item.name}</td>
            <td>
                <input type="submit" className='delet' value="Delete" onClick={() => { location.href = `http://localhost/routes/products.php?action=delete&code=${item[0]}`,  window.location.reload(false) }} />
            </td>
        </tr>
    );
}

export default RenderTableP;