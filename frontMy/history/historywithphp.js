function detailBtn(){
    fetch("http://localhost/routes/orders.php?action=getitem")
    .then((res) => res.json())
    .then((data) => {

        data.forEach(det => {
            var order_code = det.order_code
            var nameProd = det.name
            var amountProd = det[3]
            var priceProd = det.price
            var taxProd = det.tax / 100 * priceProd
            var totalProd = amountProd * priceProd + taxProd

            alert(`Compra: ${order_code}; Produto: ${nameProd}; Qtd: ${amountProd} UND; Price: $${priceProd}; Tax: $${taxProd.toFixed(2)}; Total:$${totalProd.toFixed(2)}`)
        })
    })
}

function renderTelaHistory(){
    document.getElementById('tbody').innerText = "";
    fetch("http://localhost/routes/orders.php?action=get")
    .then(response => response.json())
    .then(data => {
        const body = document.getElementById('tbody');
        
        data.forEach(histo =>{

            var histTax = parseFloat(histo.tax)
            var histTotal = parseFloat(histo.total)

            var detTT = histTax + histTotal

            const linha = document.createElement('tr');
            const tdCode = document.createElement('td');
            const detail = document.createElement('p');
            const more = document.createElement('button')
            tdCode.textContent = histo[0];
            detail.textContent = `Total Geral: ${detTT}`;

            more.textContent = "More Details";
            more.className = 'deletHisto'
            more.onclick = function () {
                detailBtn()
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