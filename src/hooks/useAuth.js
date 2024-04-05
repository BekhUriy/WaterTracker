import {useSelector} from "react-redux";

import {
    selectError,
    selectIsLoading,
    selectIsLogin,
    selectMessage,
    selectToken,
    selectUser
} from "../redux/auth/selectors.js";

export const useAuth = () => ({
    authToken: useSelector(selectToken),
    authUser: useSelector(selectUser),
    authMessage: useSelector(selectMessage),
    authIsLogin: useSelector(selectIsLogin),
    authIsLoading: useSelector(selectIsLoading),
    authError: useSelector(selectError)
})
