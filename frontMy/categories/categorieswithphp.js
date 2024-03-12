function renderTelaCateg() {
    document.getElementById("tbody").innerText = "";
    fetch("http://localhost/routes/categories.php?action=get")
        .then((response) => response.json())
        .then((data) => {
            const body = document.getElementById("tbody");
            data.forEach((category) => {
                const linha = document.createElement("tr");
                linha.innerHTML = `
                <tr>
                <td>${category.code}</td>
                <td>${category.name}</td>
                <td>${category.tax}%</td>
                <td><button class="delet" onclick="delet(), location.href='http://localhost/routes/categories.php?action=delete&code=${category.code}'">Delete</button></td>
                </tr>
                `;
                tbody.append(linha);
            });
        });
}

function delet(){
    window.location.reload(tbody)
}

renderTelaCateg()