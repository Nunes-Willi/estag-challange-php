function getProduct() {
  fetch("http://localhost/routes/products.php?action=get")
    .then((response) => response.json())
    .then((data) => {
      var busca = document.getElementById("select-product");
      data.forEach((product) => {
        var option = document.createElement("option");
        option.value = JSON.stringify(product[0]);
        option.innerHTML = JSON.stringify(product[1]).replace(/"/g, "");

        busca.append(option);
      });
    });
}

function renderTelaCar() {
  document.getElementById("tbody").innerText = "";
  fetch("http://localhost/routes/orders.php?action=getitem")
    .then(response => response.json())
    .then(data => {
      const body = document.getElementById("tbody");
      data.forEach((order) => {
        var azul = (order.tax / 100 * order.price) + (order[3] * order.price);
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <tr>
            <td>${order[0]}</td>
            <td>${order[7]}</td>
            <td>${order[3]} UND</td>
            <td>${order.tax}%</td>
                <td>$${order.price}</td>
                <td>$${azul.toFixed(2)}</td>
                <td><button class="delet" onclick=" location.href='http://localhost/routes/orders.php?action=deleteitem&code=${order[0]}'">Delete</button></td>
                </tr>
                `;
        tbody.append(linha);
         
        var taxFinish = 0;
        var totalFinish = 0;

        var taxF = parseFloat(order.tax);
        var price = parseFloat(order.price);

        taxFinish += (taxF / 100 * price);
        totalFinish += (order[3] * order.price);
        
        document.querySelector('#tax2').value = `${taxFinish.toFixed(2)}`
        document.querySelector('#total2').value = `${totalFinish.toFixed(2)}`

      });
    });
}

async function postCar(event) {
  event.preventDefault();
  const carrinho = new FormData(document.getElementById("carrinhoForm"));
  const response = await fetch(
    "http://localhost/routes/orders.php?action=postitem",
    {
      method: "POST",
      body: carrinho,
    },
    window.location.reload()
  );
  finalTaxAndTotal();
}

function pegaValorInput(event) {
  fetch("http://localhost/routes/products.php?action=get")
    .then((response) => response.json())
    .then((data) => {
      data.find((prod) => {
        if (event.target.value == prod.code) {
          var price = document.getElementById("input-car-up");
          var tax = document.getElementById("input-car-tax");

          price.value = JSON.parse(prod.price);
          tax.value = JSON.parse(prod.tax);
        }
      });
    });
}

// function order(){
//   fetch("http://localhost/routes/orders.php?action=post")
//   .then(response => response.json())
//   .then (data => {

//   })
// }
// function delet(){
//     alert('Começou cedo hoje')
// }

getProduct();
renderTelaCar();
