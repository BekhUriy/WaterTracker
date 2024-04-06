import {
  Backdrop,
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

  return (
    <>
      <Backdrop onClick={() => handleBackdropClick()} tabIndex={-1} />
      <WrapperLogout onKeyDown={() => handleKeyPress()}>
        <LogoutTitle>
          <TitleOne>Log out</TitleOne>
          <SvgClose onClick={() => handleCloseModal()} />
        </LogoutTitle>
        <TitleTwo>Do you really want to leave</TitleTwo>
        <Buttons>
          <CancelLi>
            <CancelButton onClick={() => handleCloseModal()}>
              Cancel
            </CancelButton>
          </CancelLi>
          <LogoutLi>
            <LogoutButton onClick={() => handleLogout()}>Log out</LogoutButton>
          </LogoutLi>
        </Buttons>
      </WrapperLogout>
    </>
  );
};
