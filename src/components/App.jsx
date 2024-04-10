import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SharedLayout from './SharedLayout/SharedLayout';

const WelcomePage = lazy(() => import('../pages/Welcome/Welcome.jsx'));
const HomePage = lazy(() => import('../pages/Home/Home.jsx'));
const SignInPage = lazy(() => import('../pages/Singin/Singin.jsx'));
const SignUpPage = lazy(() => import('../pages/Signup/Signup.jsx'));
const NotFoundPage = lazy(() => import('../pages/ErrorPage/ErrorPage.jsx'));

import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';

import { useAuth } from '../hooks/useAuth.js';
import { currentThunk } from '../redux/auth/thunk.js';
import Loader from './Loader/Loader.jsx';

function App() {
  const dispatch = useDispatch();
  const token = useAuth().authToken;
  const isLogin = useAuth().authIsLogin;

  useEffect(() => {
    token && !isLogin && dispatch(currentThunk());
  }, [dispatch, token, isLogin]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute redirectTo="/home" component={<WelcomePage />} />
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute component={<SignUpPage />} redirectTo="/home" />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute component={<SignInPage />} redirectTo="/home" />
            }
          />
          <Route
            path="/home"
            element={<PrivateRoute redirectTo={'/'} component={<HomePage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
