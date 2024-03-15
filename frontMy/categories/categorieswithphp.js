function renderTelaCateg() {
  document.getElementById("tbody").innerText = "";
  fetch("http://localhost/routes/categories.php?action=get")
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementById("tbody");

      data.forEach((category) => {
        const linha = document.createElement("tr");

        const tdCode = document.createElement("td");
        tdCode.textContent = category.code;
        linha.appendChild(tdCode);

        const tdCategory = document.createElement("td");
        tdCategory.textContent = category.name;
        linha.appendChild(tdCategory);

        const tdTax = document.createElement("td");
        tdTax.textContent = category.tax;
        linha.appendChild(tdTax);

        const tdAction = document.createElement("td");
        const deletBtn = document.createElement("td");
        deletBtn.className = "delet";
        deletBtn.textContent = "Delete";
        deletBtn.onclick = function () {
          delCateg(category.code);
        };
        tdAction.appendChild(deletBtn);
        linha.appendChild(tdAction);

        tbody.append(linha);
      });
    });
}

async function postCateg(event) {
  event.preventDefault();
  const category = new FormData(document.getElementById("categoryForm"));
  const response = await fetch(
    "http://localhost/routes/categories.php?action=post",
    {
      method: "POST",
      body: category,
    },
    window.location.reload()
  );
}

function delCateg(code) {
  fetch(
    `http://localhost/routes/categories.php?action=delete&code=${code}`
  ).then((response) => {
    if (response.ok) {
      renderTelaCateg();
    } else {
      console.error("Failed to delete item");
    }
  });
}
renderTelaCateg();
