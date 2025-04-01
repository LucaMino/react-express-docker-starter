import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { AuthProvider } from "./contexts/AuthContext";

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);