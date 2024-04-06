// src/components/Logout/Handlers.jsx
import { useDispatch } from 'react-redux';
import { modalClose } from '../../redux/logoutModalSlicer';
import { logoutThunk } from '../../redux/auth/thunk';

export const handleBackdropClick = (dispatch) => (e) => {
  if (e.target === e.currentTarget) {
    handleCloseModal(dispatch)();
  }
};

export const handleCloseModal = (dispatch) => () => {
  console.log('Closing modal');
  dispatch(modalClose());
};

export const handleKeyPress = (dispatch) => (e) => {
  if (e.key === 'Escape') {
    handleCloseModal(dispatch)();
  }
};

export const handleLogout = (dispatch, token) => () => {
  dispatch(logoutThunk(token));
  handleCloseModal(dispatch)();
};
