import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import SharedLayout from "./SharedLayout/SharedLayout";

import WelcomePage from "../pages/Welcome/Welcome";
import HomePage from "../pages/Home/Home";
import SignInPage from "../pages/Singin/Singin";
import SignUpPage from "../pages/Signup/Signup.jsx";

import PrivateRoute from "../guards/PrivateRoute";
import PublicRoute from "../guards/PublicRoute";

import {useAuth} from "../hooks/useAuth.js";
import {currentThunk} from "../redux/auth/thunk.js";

function App() {
    const dispatch = useDispatch();
    const token = useAuth().authToken;
    const isLogin = useAuth().authIsLogin;

    useEffect(() => {
        token && !isLogin && dispatch(currentThunk());
    }, [dispatch, token, isLogin]);

    return (
        <Routes>
            <Route path="/"
                   element={<SharedLayout/>}
            >
                <Route
                    index
                    element={
                        <PublicRoute redirectTo="/home"
                                     component={<WelcomePage/>}
                        />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <PublicRoute component={<SignUpPage/>}
                                     redirectTo="/home"
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute component={<SignInPage/>}
                                     redirectTo="/home"
                        />
                    }
                />
                <Route
                    path="/home"
                    element={<PrivateRoute redirectTo={"/"}
                                           component={<HomePage/>}
                    />}
                />
                <Route path="*"
                       element={<div>Must be error page, route not found</div>}
                />
            </Route>
        </Routes>
    );
}

export default App;
