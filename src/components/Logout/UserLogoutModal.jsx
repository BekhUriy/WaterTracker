//import React from 'react';
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
import { CloseSvg } from './CloseSvg';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunk';
import { modalClose } from '../../redux/logoutModalSlicer';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(modalClose());
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      dispatch(modalClose());
    }
  };

  const handleLogout = token => {
    dispatch(logoutThunk(token));
    dispatch(modalClose());
  };

  return (
    <WrapperLogout
      onClick={handleBackdropClick}
      onKeyDown={handleKeyPress}
      tabIndex={-1}
    >
      <LogoutTitle>
        <TitleOne>Log out</TitleOne>
        <CloseSvg onClick={()=>dispatch(modalClose())} />
      </LogoutTitle>
      <TitleTwo>Do you really want to leave</TitleTwo>
      <Buttons>
        <CancelLi>
          <CancelButton onClick={()=>dispatch(modalClose())}>Cancel</CancelButton>
        </CancelLi>
        <LogoutLi>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        </LogoutLi>
      </Buttons>
    </WrapperLogout>
  );
};
