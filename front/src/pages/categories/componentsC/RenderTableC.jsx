import React from 'react';

function RenderTableC({ item }) {
    return (
        <tr>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.tax}%</td>
            <td>
                <input type="submit" className='delet' value="Delete" onClick={() => { location.href = `http://localhost/routes/categories.php?action=delete&code=${item.code}`, window.location.reload(false)}} />
            </td>
        </tr>
    )
}

export default RenderTableC;