import {
  Buttons,
  CancelButton,
  CancelLi,
  LogoutButton,
  LogoutLi,
  LogoutTitle,
  TitleOne,
  TitleTwo,
  WrapperLogout,
} from './UserLogoutModal.styled';

import { logoutThunk } from '../../redux/auth/thunk';
import { modalClose } from '../../redux/logoutModalSlicer';
import { SvgClose } from './SvgClose';
import { useDispatch } from 'react-redux';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(modalClose());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      dispatch(modalClose());
    }
  };

  const handleLogout = (token) => {
    dispatch(logoutThunk(token));
    dispatch(modalClose());
  };

  const handleClose = () => {
    console.log('Closing modal');
    dispatch(modalClose());
  };
  return (
    <WrapperLogout
      onClick={() => handleBackdropClick()}
      onKeyDown={() => handleKeyPress()}
      /*  tabIndex={-1} */
    >
      <LogoutTitle>
        <TitleOne>Log out</TitleOne>
        <SvgClose onClick={() => handleClose()} />
      </LogoutTitle>
      <TitleTwo>Do you really want to leave</TitleTwo>
      <Buttons>
        <CancelLi>
          <CancelButton onClick={() => handleClose()}>Cancel</CancelButton>
        </CancelLi>
        <LogoutLi>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        </LogoutLi>
      </Buttons>
    </WrapperLogout>
  );
};
