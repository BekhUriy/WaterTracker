import { useSelector } from 'react-redux';
import { isAuthSelector, isLoggedInSelector } from '../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { Component } from 'react';

const PublicRoute = ({ component: Component, redirectTo = '/' } ) => {
  const isAuth = useSelector(isLoggedInSelector);
  console.log('isAuth', isAuth)
  // const { state: prevLocation } = useLocation();
  return isAuth ? <Navigate to={redirectTo}/> : Component  ;
};

export default PublicRoute;
