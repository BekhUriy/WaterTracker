import { useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoading,
  selectMessage,
  selectUser,
} from '../redux/user/selector';

export const useUser = () => ({
  user: useSelector(selectUser),
  message: useSelector(selectMessage),
  isLoading: useSelector(selectIsLoading),
  isError: useSelector(selectIsError),
});
