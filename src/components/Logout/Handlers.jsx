import { useDispatch } from 'react-redux';
import { modalClose } from '../../redux/logoutModalSlicer';
import { logoutThunk } from '../../redux/auth/thunk';

export const Handlers = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    console.log('Closing modal');
    dispatch(modalClose());
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleLogout = (token) => {
    dispatch(logoutThunk(token));
    handleCloseModal();
  };
  return {
    handleBackdropClick,
    handleCloseModal,
    handleKeyPress,
    handleLogout,
  };
};