import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Address from './address';
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
           <App/>
           <Address/>          
    </BrowserRouter>
);