import { useSelector } from 'react-redux';
import { selectUser } from '../redux/user/selector';

export const useUser = () => ({
  user: useSelector(selectUser),
});
