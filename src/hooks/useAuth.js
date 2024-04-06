import { useSelector } from 'react-redux';

import {
  selectIsLogin,
  selectMessage,
  selectToken,
  selectUser,
} from '../redux/auth/selectors.js';

export const useAuth = () => ({
  authToken: useSelector(selectToken),
  authUser: useSelector(selectUser),
  authMessage: useSelector(selectMessage),
  authIsLogin: useSelector(selectIsLogin),
});
