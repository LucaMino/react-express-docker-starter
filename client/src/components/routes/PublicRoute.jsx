import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PublicRoute = () => {
    const location = useLocation();
    const { user } = useAuth();

    if(user) {
        console.log('PublicRoute - ' + user.email)
        // location = route to redirect after login
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // if the user is authenticated, render the child routes inside PublicRoute wrapper
    return <Outlet />;
};

export default PublicRoute;
