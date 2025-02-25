import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

axios.defaults.baseURL = 'http://localhost:8080';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);