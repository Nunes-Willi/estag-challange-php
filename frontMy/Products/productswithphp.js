function getCategory(){
    fetch("http://localhost/routes/categories.php?action=get")
    .then((response) => response.json())
    .then((data) => {
        var busca = document.getElementById('select-category');
        data.forEach(category => {
            var option = document.createElement('option')
            option.value = JSON.stringify(category[0])
            option.innerHTML = JSON.stringify(category.name).replace(/"/g, "");

            busca.append(option);
        });
    })
}

function renderTelaProd() {
    document.getElementById("tbody").innerText = "";
    fetch("http://localhost/routes/products.php?action=get")
        .then((response) => response.json())
        .then((data) => {
            const body = document.getElementById("tbody");
            data.forEach((product) => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                <tr>
                <td>${product[0]}</td>
                <td>${product[1]}</td>
                <td>${product.amount} UND</td>
                <td>$${product.price}</td>
                <td>${product.name}</td>
                <td><button class="delet" onclick="postProd(event), location.href='http://localhost/routes/products.php?action=delete&code=${product[0]}'">Delete</button></td>
                </tr>
                `;
                tbody.append(linha);
            });
        });
}

async function postProd(event){
        event.preventDefault()
        const product = new FormData(document.getElementById('productForm'))
        const response = await fetch("http://localhost/routes/products.php?action=post", {
            method: 'POST',
            body: product
        },
        window.location.reload()
        )
}

getCategory()
renderTelaProd()