import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

// import FooterG from './components/FooterG.jsx'
import App from './App.jsx'
import Header from './components/Header.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <App />
    {/* <FooterG /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
