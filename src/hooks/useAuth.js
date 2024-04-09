import { useSelector } from 'react-redux';

import {
  selectIsLogin,
  selectMessage,
  selectToken,
} from '../redux/auth/selectors.js';

export const useAuth = () => ({
  authToken: useSelector(selectToken),
  authMessage: useSelector(selectMessage),
  authIsLogin: useSelector(selectIsLogin),
});
