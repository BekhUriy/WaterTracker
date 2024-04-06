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

import { SvgClose } from './SvgClose';
import { Handlers } from './Handlers';

export const UserLogoutModal = () => {
  const {
    handleCloseModal,
    handleBackdropClick,
    handleKeyPress,
    handleLogout,
  } = Handlers();
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
