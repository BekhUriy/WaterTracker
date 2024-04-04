import { useSelector } from 'react-redux';
import { isAuthSelector, isLoggedInSelector } from '../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isAuth = useSelector(isLoggedInSelector);
  const isAuth = true;
  // const location = useLocation();

  return isAuth ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
