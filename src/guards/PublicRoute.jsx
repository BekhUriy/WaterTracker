import {Navigate} from 'react-router-dom';
import {useAuth} from "../hooks/useAuth.js";


const PublicRoute = ({component: Component, redirectTo = '/'}) => {
    const isAuth = useAuth().authToken;

    return isAuth ? <Navigate to={redirectTo}/> : Component;
};

export default PublicRoute;
