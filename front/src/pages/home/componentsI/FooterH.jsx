import React from 'react';

function FooterH() {
    return (
        <>
            <div className="direito">
                <label>Tax: <input type="text" id="tax2" className="tax2" name="taxF" placeholder="$0.00" disabled step="any" /></label><br />
                <label>Total: <input type="text" id="total2" className="total2" name="totalF" placeholder="$0.00" disabled step="any" /></label>
            </div>
            <div className="direito2">
                <input type="submit" /*onClick={}*/ className="cancel" value="Cancel" />
                <button type="submit" /*onClick={}*/ className="finish" value="Finish">Finhish</button>
            </div>
        </>
    );
}

export default FooterH;