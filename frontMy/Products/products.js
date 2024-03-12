var tbItemProd = [];

    function toLimit(string = ""){
        string.value = string.value.substring(0,30);
    }

    function Addproduct() {

        if (localStorage.mytbItemProd) {
            tbItemProd = JSON.parse(localStorage.getItem('mytbItemProd'));
        }

        var newprod = document.getElementById('input-prod').value;
        var newamount = document.getElementById('input-amount').value;
        var newprice = document.getElementById('input-up').value;
        var newcategory = document.getElementById('select-category').value;
        console.log(newcategory)

        if(!newprod || !newamount || !newprice || newcategory === 'Category'){
            alert("Algum(ns) campo ainda não está preenchido")
            return;
        }

        const newElementProd = { id: tbItemProd.length + 1, newprod, newamount, newprice, newcategory }

        tbItemProd.push(newElementProd);
        document.getElementById('input-prod').value = "";
        document.getElementById('input-amount').value = "";
        document.getElementById('input-up').value = "";
        // document.getElementById('input-category').value = "";
        localStorage.mytbItemProd = JSON.stringify(tbItemProd);

        if(newamount = 0){
            newamount = 100
            return;
        }

        renderItemP(newElementProd);

    }

    function renderItemP(itemP) {
        var tbCorpo = document.getElementById('tbody');
        var tr = document.createElement('tr');
        var tdCode = document.createElement('td');
        var tdprod = document.createElement('td');
        var tdamount = document.createElement('td');
        var tdprice = document.createElement('td');
        var tdcategory = document.createElement('td');
        var tdaction = document.createElement('td');
        var deleteBtn = document.createElement('input');

        tdCode.textContent = pad(itemP.id, 3);
        tdprod.textContent = itemP.newprod;
        tdamount.textContent = itemP.newamount + " und";
        tdprice.textContent = "$" + itemP.newprice;
        tdcategory.textContent = JSON.parse(itemP.newcategory).newcat;
        tdcategory.innerHTML.textContent = itemP.newcategory

        deleteBtn.type = 'button';
        deleteBtn.className = 'delet';
        deleteBtn.value = 'Delete';
        deleteBtn.onclick = function () {
            delet(itemP.id);
        };

        tdaction.appendChild(deleteBtn);
        tr.appendChild(tdCode);
        tr.appendChild(tdprod);
        tr.appendChild(tdamount);
        tr.appendChild(tdprice);
        tr.appendChild(tdcategory);
        tr.appendChild(tdaction);
        tbCorpo.appendChild(tr);
    }
    function pad(number, length) {
        return (number + '').padStart(length, '0');
    }

    function delet(id) {
        tbItemProd = tbItemProd.filter(item => item.id !== id);
        localStorage.mytbItemProd = JSON.stringify(tbItemProd);
        renderTable();
    }

    function renderTable() {
        var tbCorpo = document.getElementById('tbody');
        tbCorpo.innerHTML = '';
        tbItemProd.forEach(item => renderItemP(item));
    }

    function getitem() {
        if (localStorage.mytbItemProd) {
            tbItemProd = JSON.parse(localStorage.getItem('mytbItemProd'));
            renderTable();
        }
    }

    function getCategories() {
        const mytbitem = JSON.parse(localStorage.getItem('mytbitem'));
        if (mytbitem) {
            mytbitem.forEach(item => renderCategory(item));
        }
    }


    function renderCategory(item) {
        var select = document.getElementById('select-category')
        var option = document.createElement('option')
        option.value = JSON.stringify(item)

        select.appendChild(option)
        option.innerHTML = JSON.stringify(item.newcat).replace(/"/g, "")
    };
    
    getCategories()
    getitem();