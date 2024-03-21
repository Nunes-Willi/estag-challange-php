function getCategory() {
  fetch("http://localhost/routes/categories.php?action=get")
    .then((response) => response.json())
    .then((data) => {
      var busca = document.getElementById("select-category");
      data.forEach((category) => {
        var option = document.createElement("option");
        option.value = JSON.stringify(category[0]);
        option.innerHTML = JSON.stringify(category.name).replace(/"/g, "");

        busca.append(option);
      });
    });
}

function renderTelaProd() {
  document.getElementById("tbody").innerText = "";
  fetch("http://localhost/routes/products.php?action=get")
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementById("tbody");

      data.forEach((product) => {
        const linha = document.createElement("tr");

        const tdCode = document.createElement("td");
        tdCode.textContent = product[0];
        linha.appendChild(tdCode);

        const tdProduct = document.createElement("td");
        tdProduct.textContent = product[1];
        linha.appendChild(tdProduct);

        const tdAmount = document.createElement("td");
        tdAmount.textContent = product.amount;
        linha.appendChild(tdAmount);

        const tdPrice = document.createElement("td");
        tdPrice.textContent = product.price;
        linha.appendChild(tdPrice);

        const tdCategory = document.createElement("td");
        tdCategory.textContent = product.name;
        linha.appendChild(tdCategory);

        const tdAction = document.createElement("td");
        const deletBtn = document.createElement("td");
        deletBtn.className = "delet";
        deletBtn.textContent = "Delete";
        deletBtn.onclick = function () {
          location.href = `http://localhost/routes/products.php?action=delete&code=${product[0]}`
        };
        tdAction.appendChild(deletBtn);
        linha.appendChild(tdAction);

        tbody.append(linha);
      });
    });
}

async function postProd(event) {
  event.preventDefault();
  const product = new FormData(document.getElementById("productForm"));
  const response = await fetch(
    "http://localhost/routes/products.php?action=post",
    {
      method: "POST",
      body: product,
    },
    window.location.reload()
  );
}
getCategory();
renderTelaProd();
