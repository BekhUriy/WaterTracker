import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useAuth().authIsLogin;

  return isAuth ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
