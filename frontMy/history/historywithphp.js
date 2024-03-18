function renderTelaHistory(){
    document.getElementById('tbody').innerText = "";
    fetch("http://localhost/routes/orders.php?action=get")
    .then(response => response.json())
    .then(data => {
        const body = document.getElementById('tbody');
        
        data.forEach(histo =>{
            const linha = document.createElement('tr');
            
            const tdCode = document.createElement('td');
            const detail = document.createElement('p');
            const more = document.createElement('button')
            tdCode.textContent = histo[0];
            detail.textContent = `Detalhes: ${histo.tax}, ${histo.total}`;

            more.textContent = "More";
            more.className = 'deletHisto'
            more.onclick = function () {
                alert("More Information")
            }

            detail.appendChild(more)
            tdCode.appendChild(detail)
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