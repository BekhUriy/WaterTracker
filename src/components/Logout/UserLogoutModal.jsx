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

import { Handlers } from './Handlers';
import { SvgClose } from './SvgClose';

export const UserLogoutModal = () => {
  return (
    <>
      <Backdrop onClick={() => Handlers.handleBackdropClick()} tabIndex={-1} />
      <WrapperLogout onKeyDown={() => Handlers.handleKeyPress()}>
        <LogoutTitle>
          <TitleOne>Log out</TitleOne>
          <SvgClose onClick={() => Handlers.handleCloseModal()} />
        </LogoutTitle>
        <TitleTwo>Do you really want to leave</TitleTwo>
        <Buttons>
          <CancelLi>
            <CancelButton onClick={() => Handlers.handleCloseModal()}>
              Cancel
            </CancelButton>
          </CancelLi>
          <LogoutLi>
            <LogoutButton onClick={() => Handlers.handleLogout()}>
              Log out
            </LogoutButton>
          </LogoutLi>
        </Buttons>
      </WrapperLogout>
    </>
  );
};