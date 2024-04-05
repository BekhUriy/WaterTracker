import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/Home/Home';
import WelcomePage from '../pages/Welcome/Welcome';
//import PrivateRoute from '../guards/PrivateRoute';
import PublicRoute from '../guards/PublicRoute';
import SignUpPage from '../pages/Signup/Signup';
import SignInPage from '../pages/Singin/Singin';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '../redux/auth/selectors';
import { refreshThunk } from '../redux/auth/thunk';
import {  useEffect } from 'react';
import { UserLogoModal } from './Header/userButton/userLogoModal/userLogoModal';

// const test = import.meta.env.VITE_API_TEST;
function App() {
  // console.log(test);
  const profile = useSelector(profileSelector)
  const dispatch = useDispatch()
  console.log(profile);

	useEffect(() => {
		!profile && dispatch(refreshThunk())
	}, [dispatch, profile])
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute redirectTo="/home" component={<WelcomePage />} />
          }
        />
        <Route
          path="home"
          // element={<PrivateRoute redirectTo={'/'} component={<HomePage />} />}
          element={<PublicRoute redirectTo={'/'} component={<HomePage />} />}

        />
        <Route
          path="signup"
          element={
            <PublicRoute component={<SignUpPage />} redirectTo="/home" />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute component={<SignInPage />} redirectTo="/home" />
          }
        />
        <Route path="*" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
