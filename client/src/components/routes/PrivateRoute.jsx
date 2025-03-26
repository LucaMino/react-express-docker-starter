import { Navigate, useLocation, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const location = useLocation();
    const isAuthenticated = () => {
        return localStorage.getItem('token') !== null;
    };

    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
