function renderTelaHistory(){
    document.getElementById('tbody').innerText = "";
    fetch("http://localhost/routes/orders.php?action=get")
    .then(response = response.json())
    .then(data => {
        console.log(data)
        const body = document.getElementById('tbody');

        data.forEach(histo =>{
            const linha = document.createElement('tr');

            const tdCode = document.createElement('td')
            tdCode.textContent = histo[0];
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