var tbItemCar = [];

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

function AddCarrrinho() {
  if (localStorage.mytbItemCar) {
    tbItemCar = JSON.parse(localStorage.getItem("mytbItemCar"));
  }

  var newProdCar = document.getElementById("select-product").value;
  var newAmountCar = document.getElementById("input-car-amount").value;
  var newTaxCar = document.getElementById("input-car-tax").value;
  var newUpCar = document.getElementById("input-car-up").value;

  const selectedProduct = JSON.parse(newProdCar);
  const newAmount = selectedProduct.newamount;

  const nwAmnt = parseInt(newAmount);
  const nwAmntCar = parseInt(newAmountCar);

  if (!newUpCar || !newTaxCar || !newAmountCar || newProdCar === "Product") {
    alert("Algum(ns) campo ainda não esta preenchido");
    return;
  }

  if (nwAmnt < nwAmntCar) {
    alert("Quantidade solicitada maior do que o estoque disponível.");
    return;
  } else {
    const isProductInCart = tbItemCar.some(
      (item) => item.newProdCar === newProdCar
    );

    if (isProductInCart) {
      alert("Este item já está no carrinho.");
      return;
    }

    const newElementCar = {
      id: tbItemCar.length + 1,
      newProdCar,
      newAmountCar,
      newTaxCar,
      newUpCar,
    };

    tbItemCar.push(newElementCar);
    document.getElementById("input-car-amount").value = "1";
    document.getElementById("select-product").value = "Product";
    document.getElementById("input-car-tax").value = "";
    document.getElementById("input-car-up").value = "";

    localStorage.mytbItemCar = JSON.stringify(tbItemCar);

    renderItemC(newElementCar);
  }
}

function renderItemC(itemC) {
  var tbCorpo = document.getElementById("tbody");
  var tr = document.createElement("tr");
  var tdCode = document.createElement("td");
  var tdProd = document.createElement("td");
  var tdAmount = document.createElement("td");
  var tdTax = document.createElement("td");
  var tdUp = document.createElement("td");
  var tdAction = document.createElement("td");
  tdTotal = document.createElement("td");
  var deleteBtn = document.createElement("input");

  var azul =
    (itemC.newTaxCar / 100) * itemC.newUpCar +
    itemC.newAmountCar * itemC.newUpCar;

  (tdCode.textContent = itemC.id), 3;
  tdProd.textContent = itemC.newProdCar.replace(/"/g, "");
  tdAmount.textContent = itemC.newAmountCar + " und";
  tdTax.textContent = itemC.newTaxCar + "%";
  tdUp.textContent = "$" + itemC.newUpCar;
  tdTotal.textContent = `$${azul.toFixed(2)}`;

  deleteBtn.type = "button";
  deleteBtn.className = "delet";
  deleteBtn.value = "Delete";
  deleteBtn.onclick = function () {
    delet(itemC.id);
  };

  tdAction.appendChild(deleteBtn);
  tr.appendChild(tdCode);
  tr.appendChild(tdProd);
  tr.appendChild(tdAmount);
  tr.appendChild(tdTax);
  tr.appendChild(tdUp);
  tr.appendChild(tdTotal);
  tr.appendChild(tdAction);
  tbCorpo.appendChild(tr);

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

  updateTaxAndTotalFinal();
}

function getItemCar() {
  if (localStorage.mytbItemCar) {
    tbItemCar = JSON.parse(localStorage.getItem("mytbItemCar"));
    renderTable();
  }
}

function renderTable() {
  var tbCorpo = document.getElementById("tbody");
  tbCorpo.innerHTML = "";
  tbItemCar.forEach((itemC) => renderItemC(itemC));
}

function delet(id) {
  tbItemCar = tbItemCar.filter((itemC) => itemC.id !== id);
  localStorage.mytbItemCar = JSON.stringify(tbItemCar);
  renderTable();
}

// function renderTelaCar() {
//   document.getElementById("tbody").innerText = "";
//   fetch("http://localhost/routes/orders.php?action=getitem")
//     .then((response) => response.json())
//     .then((data) => {
//       const body = document.getElementById("tbody");

//       var taxFinish = 0;
//       var totalFinish = 0;

//       data.forEach((order) => {
//         var azul = (order.tax / 100) * order.price + order[3] * order.price;
//         const linha = document.createElement("tr");
//         linha.innerHTML = `
//             <tr>
//             <td>${order[0]}</td>
//             <td>${order[7]}</td>
//             <td>${order[3]} UND</td>
//             <td>${order.tax}%</td>
//                 <td>$${order.price}</td>
//                 <td>$${azul.toFixed(2)}</td>
//                 <td><button class="delet" onclick=" location.href='http://localhost/routes/orders.php?action=deleteitem&code=${
//                   order[0]
//                 }'">Delete</button></td>
//                 </tr>
//                 `;
//         body.append(linha);
//         // //console.log(data);

//         var taxF = parseFloat(order.tax);
//         var price = parseFloat(order.price);

//         taxFinish += (taxF / 100) * price;
//         totalFinish += order[3] * order.price;

//         document.querySelector("#tax2").value = `${taxFinish.toFixed(2)}`;
//         document.querySelector("#total2").value = `${totalFinish.toFixed(2)}`;
//       });
//     });
// }

// async function postCar(event) {
//   event.preventDefault();

// }

async function postCar(bodyContent) {
  const formData = new FormData();
  console.log(bodyContent);
  formData.append("order_code", bodyContent.order_code);
  formData.append("product_code", bodyContent.product_code);
  formData.append("amount", bodyContent.amount);
  formData.append("price", bodyContent.price);
  formData.append("tax", bodyContent.tax);

  const response = await fetch(
    "http://localhost/routes/orders.php?action=postitem",
    {
      method: "POST",
      body: formData,
    }
  );
}

function pegaValorInput(event) {
  console.log(event);
  fetch("http://localhost/routes/products.php?action=get")
    .then((response) => response.json())
    .then((data) => {
      data.find((prod) => {
        console.log(data);
        if (event.target.value == prod[0]) {
          var price = document.getElementById("input-car-up");
          var tax = document.getElementById("input-car-tax");

          price.value = JSON.parse(prod.price);
          tax.value = JSON.parse(prod.tax);
        }
      });
    });
}

// function pegaValorInput() {
//  const getForm = document.getElementById('select-form').value
//  fetch("http://localhost/routes/products.php?action=get")
//     .then((response) => response.json())
//     .then((product) => {
//       const product = product.find((product) => product[0] == getForm)

//       document.getElementById('input-car-tax').value = product.tax
//       document.getElementById('input-car-up').value = product.price
//     })

// }

async function joinOrders() {
  if (tbItemCar.length > 0) {
    let getTotal = document.getElementById("total2").value;
    let getTax = document.getElementById("tax2").value;
    let carrinho = JSON.parse(localStorage.getItem("mytbItemCar"));
    let data = new FormData();
    let orderCode;
    data.append("totalF", getTotal.split("$")[1]);
    data.append("taxF", getTax.split("$")[1]);

    let response = fetch(`http://localhost/routes/orders.php?action=post`, {
      method: "POST",
      body: data,
    });

    orderCode = await response.then((res) => res.json());
    carrinho.forEach((produto) => {
      postCar({
        order_code: orderCode,
        product_code: produto.id,
        amount: parseInt(produto.newAmountCar),
        price: parseFloat(produto.newUpCar),
        tax: parseFloat(produto.newTaxCar),
      });
    });

    // menosProdStok()
    setTimeout(() => {
      localStorage.removeItem("mytbItemCar");
      tbItemCar = [];
      renderTable();
    }, 700);
  } else {
    alert("No items in the cart to finish!");
  }
}

function cancel() {
  if (tbItemCar.length >= 1) {
    localStorage.mytbItemCar = JSON.stringify(tbItemCar);
    localStorage.removeItem("mytbItemCar");
    tbItemCar = [];

    renderTable();
  } else {
    alert("Nenuma compra em andamento");
    return;
  }
}
getProduct();
getItemCar();
