import React from 'react';

function FooterH() {
    return (
        <div>
            <footer>
            <div className="direito">
            <label>Tax: <input type="text" id="tax2" className="tax2" name="taxF" placeholder="$0.00" disabled="true" step="any" /></label><br/>
            <label>Total: <input type="text" id="total2" className="total2" name="totalF" placeholder="$0.00" disabled="true" step="any"/></label>
        </div>
        <div className="direito2">
            <input type="submit" onclick="cancel(event)" className="cancel" value="Cancel"/>
            <button type="submit" onclick="joinOrders()" className="finish" value="Finish">Finhish</button>
        </div>
            </footer>
        </div>
    );
}

export default FooterH;