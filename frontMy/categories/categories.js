var tbitem = [];

    function toLimit(string = "") {
        string.value = string.value.substring(0, 30);
    }

    function AddCategory() {

        if (localStorage.mytbitem) {
            tbitem = JSON.parse(localStorage.getItem('mytbitem'));
        }
        var newcat = document.getElementById('input-category').value;
        var newtax = document.getElementById('input-tax').value;

        if (newcat, newtax != "") {
            const newelement = { id: tbitem.length + 1, newcat, newtax };
            tbitem.push(newelement);
            document.getElementById('input-category').value = "";
            document.getElementById('input-tax').value = "";

            localStorage.mytbitem = JSON.stringify(tbitem);

            renderItem(newelement);

        } else { alert("Algum(ns) campo ainda não está preenchido") }
    }











    
    function renderItem(item) {
        var corpotb = document.getElementById('tbody');
        var tr = document.createElement('tr');
        var tdcode = document.createElement('td');
        var tdcat = document.createElement('td');
        var tdtax = document.createElement('td');
        var tdaction = document.createElement('td');
        var deleteBtn = document.createElement('input');

        tdcode.textContent = pad(item.id, 3);
        tdcat.textContent = item.newcat;
        tdtax.textContent = item.newtax + '%';

        deleteBtn.type = 'button';
        deleteBtn.className = 'delet';
        deleteBtn.value = 'Delete';
        deleteBtn.onclick = function () {
            delet(item.id);
        };

        tdaction.appendChild(deleteBtn);
        tr.appendChild(tdcode);
        tr.appendChild(tdcat);
        tr.appendChild(tdtax);
        tr.appendChild(tdaction);
        corpotb.appendChild(tr);
    }































    function pad(number, length) {
        return (number + '').padStart(length, '0');
    }

    function delet(id) {
        tbitem = tbitem.filter(item => item.id !== id);
        localStorage.mytbitem = JSON.stringify(tbitem);
        renderTable();
    }
















    function renderTable() {
        var corpotb = document.getElementById('tbody');
        corpotb.innerHTML = '';
        tbitem.forEach(item => renderItem(item));
    }































    function getitem() {
        if (localStorage.mytbitem) {
            tbitem = JSON.parse(localStorage.getItem('mytbitem'));
            renderTable();
        }
    }
    getitem();