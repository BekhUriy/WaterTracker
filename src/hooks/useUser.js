import { useSelector } from 'react-redux';
import { selectErrPassMes, selectUser } from '../redux/user/selector';

export const useUser = () => ({
  user: useSelector(selectUser),
  errPassMes: useSelector(selectErrPassMes)
});
