var tbItemCar = [];

    function AddCarrrinho() {
        if (localStorage.mytbItemCar) {
            tbItemCar = JSON.parse(localStorage.getItem('mytbItemCar'));
        }

        var newProdCar = document.getElementById('select-product').value;
        var newAmountCar = document.getElementById('input-car-amount').value;
        var newTaxCar = document.getElementById('input-car-tax').value;
        var newUpCar = document.getElementById('input-car-up').value;

        const selectedProduct = JSON.parse(newProdCar);

        const newAmount = selectedProduct.newamount
        
        const nwAmnt = parseInt(newAmount)
        const nwAmntCar = parseInt(newAmountCar)
        
        if (!newUpCar || !newTaxCar || !newAmountCar || newProdCar?.newprod === "Product") {
            alert('Algum(ns) campo ainda não esta preenchido')
            return;
        }

    if ( nwAmnt < nwAmntCar) {
        alert('Quantidade solicitada maior do que o estoque disponível.')
        return;
    } else{
        const isProductInCart = tbItemCar.some(item => item.newProdCar === newProdCar);
        
        if (isProductInCart) {
            alert('Este item já está no carrinho.');
            return;
        }
        
        const newElementCar = { id: tbItemCar.length + 1, newProdCar, newAmountCar, newTaxCar, newUpCar };
        
        tbItemCar.push(newElementCar);
        document.getElementById('input-car-amount').value = "1";
        document.getElementById('select-product').value = "Product";
        document.getElementById('input-car-tax').value = "";
        document.getElementById('input-car-up').value = "";
        
        localStorage.mytbItemCar = JSON.stringify(tbItemCar);
        
        function updateTaxAndTotalFinal() {
            var taxFinal = 0;
            var totalFinal = 0;
            
            tbItemCar.forEach(itemC => {
                taxFinal += parseFloat(itemC.newTaxCar / 100 * itemC.newUpCar);
                totalFinal += (itemC.newAmountCar * itemC.newUpCar);
                
                document.querySelector('.tax2').value = `$${taxFinal.toFixed(2)}`;
                document.querySelector('.total2').value = `$${totalFinal.toFixed(2)}`;
                
                localStorage.mytbItemCar = JSON.stringify(tbItemCar)
            });
        }
        
        updateTaxAndTotalFinal();
        renderItemC(newElementCar);
    }
    
    }

    function renderItemC(itemC) {
        var tbCorpo = document.getElementById('tbody');
        var tr = document.createElement('tr');
        var tdCode = document.createElement('td');
        var tdProd = document.createElement('td');
        var tdAmount = document.createElement('td');
        var tdTax = document.createElement('td');
        var tdUp = document.createElement('td');
        var tdAction = document.createElement('td');
        tdTotal = document.createElement('td')
        var deleteBtn = document.createElement('input');

        var azul = (itemC.newTaxCar / 100 * itemC.newUpCar) + (itemC.newAmountCar * itemC.newUpCar)

        tdCode.textContent = pad(itemC.id, 3);
        tdProd.textContent = JSON.parse(itemC.newProdCar).newprod;
        tdAmount.textContent = itemC.newAmountCar + ' und';
        tdTax.textContent = itemC.newTaxCar + '%';
        tdUp.textContent = '$' + itemC.newUpCar;
        tdTotal.textContent = `$${azul.toFixed(2)}`

        deleteBtn.type = 'button';
        deleteBtn.className = 'delet';
        deleteBtn.value = 'Delete';
        deleteBtn.onclick = function () {
            delet(itemC.id)
        };

        tdAction.appendChild(deleteBtn)
        tr.appendChild(tdCode);
        tr.appendChild(tdProd);
        tr.appendChild(tdAmount);
        tr.appendChild(tdTax);
        tr.appendChild(tdUp);
        tr.appendChild(tdTotal);
        tr.appendChild(tdAction);
        tbCorpo.appendChild(tr);
    }

    function pad(number, length) {
        return (number + '').padStart(length, '0');
    }

    function delet(id) {
        tbItemCar = tbItemCar.filter(itemC => itemC.id !== id);
        localStorage.mytbItemCar = JSON.stringify(tbItemCar);
        renderTable();
    }

    function renderTable() {
        var tbCorpo = document.getElementById('tbody');
        tbCorpo.innerHTML = '';
        tbItemCar.forEach(itemC => renderItemC(itemC));
    }

    function getItemCar() {
        if (localStorage.mytbItemCar) {
            tbItemCar = JSON.parse(localStorage.getItem('mytbItemCar'));
            renderTable();
        }
    }

    function getProduct() {
        const mytbItemProd = JSON.parse(localStorage.getItem('mytbItemProd'));
        if (mytbItemProd) {
            mytbItemProd.forEach(itemP => renderProduct(itemP));
        }
    }


    function renderProduct(itemP) {
        var select = document.getElementById('select-product')
        var option = document.createElement('option')
        option.value = JSON.stringify(itemP)

        select.appendChild(option)
        option.innerHTML = JSON.stringify(itemP.newprod).replace(/"/g, "")
    }

    function pegaValorInput() {
        const amountCar = document.getElementById('input-car-amount').value;
        const getProdCar = document.getElementById('select-product').value;
        const prodCar = JSON.parse(getProdCar)
        const cartProdCar = { prodCar, amountCar };


        const taxCar = JSON.parse(cartProdCar.prodCar.newcategory).newtax;
        const priceCar = cartProdCar.prodCar?.newprice;

        document.getElementById('input-car-up').value = `${priceCar}`
        document.getElementById('input-car-tax').value = `${taxCar}`
    }

    function finishHim() {
        if (tbItemCar.length > 0) {
            menosProdStok()
            storeHistoryItems();
            localStorage.removeItem('mytbItemCar');
            tbItemCar = [];
            renderTable();
        } else {
            alert('No items in the cart to finish!');
        }

        location.reload()
    }

    function menosProdStok() {
        let lista = JSON.parse(localStorage.getItem('mytbItemProd')) || [];
        let produtosModificados = new Set();
    
        tbItemCar.forEach(itemC => {
            const selectedProduct = JSON.parse(itemC.newProdCar);
            const newAmount = selectedProduct.newamount - itemC.newAmountCar;
    
            if (newAmount >= 0 && !produtosModificados.has(selectedProduct.id)) {
                selectedProduct.newamount = newAmount;
                produtosModificados.add(selectedProduct.id);
            } else {
                alert('Quantidade indisponível para o produto ' + selectedProduct.newprod);
            }
    
            const index = lista.findIndex(item => item.id === selectedProduct.id);
            if (index !== -1) {
                lista[index] = selectedProduct;
            } else {
                lista.push(selectedProduct);
            }
        });
    
        localStorage.setItem('mytbItemProd', JSON.stringify(lista));
    }

    function storeHistoryItems() {
        var historyItems = JSON.parse(localStorage.getItem('myHistoryItems')) || [];

        if (tbItemCar.length > 0) {
            // var code = pad(historyItems + 1, 3);
            var taxFinal = 0;
            var totalFinal = 0;
        }

        tbItemCar.forEach(itemC => {
            taxFinal += parseFloat(itemC.newTaxCar / 100 * itemC.newUpCar);
            totalFinal += (itemC.newAmountCar * itemC.newUpCar);
        });

        var historyDetail = {
            // id: code,
            tax: taxFinal,
            total: totalFinal,
            details: tbItemCar,
        };

        historyItems.push(historyDetail);

        localStorage.setItem('myHistoryItems', JSON.stringify(historyItems));
    }

    function cancel() {
        localStorage.mytbItemCar = JSON.stringify(tbItemCar);
        localStorage.removeItem('mytbItemCar');
        tbItemCar = [];
        
        renderTable();
    }

    getProduct()
    getItemCar()