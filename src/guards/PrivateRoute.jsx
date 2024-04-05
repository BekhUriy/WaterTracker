import {Navigate} from 'react-router-dom';
import {useAuth} from "../hooks/useAuth.js";

const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const isAuth = useAuth().authToken;

    return isAuth ? Component : <Navigate to={redirectTo}/>;
};

export default PrivateRoute;
