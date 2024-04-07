// src/components/Logout/UserLogoutModal.jsx
import { useDispatch } from 'react-redux';
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
import {
  handleBackdropClick,
  handleCloseModal,
  handleKeyPress,
  handleLogout,
} from './HandlersLogout';
import { SvgClose } from './SvgClose';
import { useEffect } from 'react';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = handleKeyPress(dispatch);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <>
      <Backdrop onClick={handleBackdropClick(dispatch)} tabIndex={-1} />
      <WrapperLogout>
        <LogoutTitle>
          <TitleOne>Log out</TitleOne>
          <button
            style={{
              border: 'none',
              background: '#ffffff',
            }}
            onClick={handleCloseModal(dispatch)}
          >
            <SvgClose />
          </button>
        </LogoutTitle>
        <TitleTwo>Do you really want to leave</TitleTwo>
        <Buttons>
          <CancelLi>
            <CancelButton onClick={handleCloseModal(dispatch)}>
              Cancel
            </CancelButton>
          </CancelLi>
          <LogoutLi>
            <LogoutButton onClick={handleLogout(dispatch)}>
              Log out
            </LogoutButton>
          </LogoutLi>
        </Buttons>
      </WrapperLogout>
    </>
  );
};
