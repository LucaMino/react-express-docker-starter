import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = () => {
    const location = useLocation();
    const { user } = useAuth();

    if(!user) {
        // location = route to redirect after login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    console.log('PrivateRoute - '+ user.email)

    // if the user is authenticated, render the child routes
    return <Outlet />;
};

export default PrivateRoute;
