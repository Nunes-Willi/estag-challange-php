import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";
import History from "./pages/history/History";

function App(){
return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/History" element={<History />}/>
    </Routes>
)
}
export default App;