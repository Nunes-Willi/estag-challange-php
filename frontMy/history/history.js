historyItems = [];
    
    function displayHistoryItems() {
       var historyItems = JSON.parse(localStorage.getItem('myHistoryItems')) || [];

       var tableBody = document.getElementById('tbody');

    
       tableBody.innerHTML = '' ;

       historyItems.forEach((item, i) => {
           var row = tableBody.insertRow();
           var codeCell = row.insertCell(0);
           var taxCell = row.insertCell(1);
           var totalCell = row.insertCell(2);

           codeCell.textContent = pad(i + 1, 3);
           taxCell.textContent = '$' + item.tax.toFixed(2);
           totalCell.textContent = `$${item.total.toFixed(2)}`;

           codeCell.addEventListener('mouseover', function () {
               var details = '';
               item.details.forEach(detail => {
                   details += `Product: ${JSON.parse(detail.newProdCar).newprod} | Amount: ${detail.newAmountCar} | UP: $${detail.newUpCar} | Tax: $${(detail.newTaxCar / 100 * detail.newUpCar).toFixed(2)} | Total: $${(detail.newAmountCar * detail.newUpCar).toFixed(2)}\n`;
               });

               alert(details);
        });
       });
   }

function pad(number, length) {
    return (number + '').padStart(length, '0');
}

function cancel(){
    localStorage.myHistoryItems = JSON.stringify(historyItems);
    localStorage.removeItem('myHistoryItems');
    historyItems = [];
    displayHistoryItems();
}

displayHistoryItems();