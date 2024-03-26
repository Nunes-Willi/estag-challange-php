function detailBtn(codeButton) {
    fetch("http://localhost/routes/orders.php?action=getitem")
        .then((res) => res.json())
        .then((data) => {

            fetch("http://localhost/routes/orders.php?action=get")
                .then(testeRes => testeRes.json())
                .then(dataTeste => {

                    var order_code
                    var nameProd
                    var amountProd
                    var priceProd
                    var taxProd
                    var totalProd
                    var textoProdutosAlert = ''

                    dataTeste.forEach(testDet => {
                        if (testDet.code == codeButton) {
                            data.forEach(det => {
                                if (det.order_code == codeButton) {
                                console.log("🚀 ~ .then ~ codeButton:", codeButton)

                                    order_code = det.order_code
                                    nameProd = det.name
                                    amountProd = det[3]
                                    priceProd = det.price
                                    taxProd = det.tax / 100 * priceProd
                                    totalProd = amountProd * priceProd + taxProd
                                    textoProdutosAlert += `Produto: ${nameProd}; Qtd: ${amountProd} UND; Price: $${priceProd}; Tax: $${taxProd.toFixed(2)}; Total:$${totalProd.toFixed(2)}\n`
                                    return
                                }
                            });
                        }
                    });
                    alert(`Compra: ${order_code}; Produtos: \n${textoProdutosAlert}`)
                });
        });
}


function renderTelaHistory() {
    document.getElementById('tbody').innerText = "";
    fetch("http://localhost/routes/orders.php?action=get")
        .then(response => response.json())
        .then(data => {
            const body = document.getElementById('tbody');

            data.forEach(histo => {

                var histTax = parseFloat(histo.tax)
                var histTotal = parseFloat(histo.total)

                var detTT = histTax + histTotal

                const linha = document.createElement('tr');
                const tdCode = document.createElement('td');
                const detail = document.createElement('p');
                const more = document.createElement('button')
                tdCode.textContent = histo[0];
                detail.textContent = `Total Geral: ${detTT.toFixed(2)}`;

                more.textContent = "More Detail";
                more.className = 'deletHisto'
                more.onclick = function () {
                    detailBtn(histo[0])
                }

                detail.appendChild(more);
                tdCode.appendChild(detail);
                linha.appendChild(tdCode);

                const tdTax = document.createElement('td');
                tdTax.textContent = histo.tax;
                linha.appendChild(tdTax);

                const tdTotal = document.createElement('td');
                tdTotal.textContent = histo.total;
                linha.appendChild(tdTotal);

                body.append(linha);
            });
        });
}
renderTelaHistory()