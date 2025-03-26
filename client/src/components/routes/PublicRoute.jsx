import { Navigate, useLocation, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    const location = useLocation();
    const isAuthenticated = () => {
        return localStorage.getItem('token') !== null;
    };

    if (isAuthenticated()) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default PublicRoute;