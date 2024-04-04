import { useSelector } from 'react-redux';
import { isAuthSelector } from '../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(isAuthSelector);
  const location = useLocation();

  return isAuth ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
