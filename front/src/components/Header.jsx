import React from 'react';

import './components.css'

function Header() {
    return ( 
        <div>
            <div className="header">
                <a  className="linkHome" href="/">Suite Store</a>
                <a href="/products">Products</a>
                <a href="/categories">Categories</a>
                <a href="/history">History</a>
            </div>
        </div>
     );
}

export default Header;