import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import { useAuth } from './contexts/AuthContext';

const App = () => {
    const { pathname } = useLocation();
    const authRoutes = ['/login', '/register'];
    const { user } = useAuth();

    useEffect(() => {
        console.log('user1')
        // const { user } = useAuth();

        console.log('user')
        console.log(user)
    }, []);

    return (
        <div className='flex flex-col min-h-screen'>
            {!authRoutes.includes(pathname) && <Header />}
            <main className='flex-grow'>
                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        {/* <Route path="/" element={<Home />} /> */}
                    </Route>
                </Routes>
            </main>
            {!authRoutes.includes(pathname) && <Footer />}
        </div>
    );
};

export default App;
