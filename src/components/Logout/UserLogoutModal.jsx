// src/components/Logout/UserLogoutModal.jsx
import { Backdrop, Buttons, CancelButton, CancelLi, LogoutButton, LogoutLi, LogoutTitle, TitleOne, TitleTwo, WrapperLogout } from './UserLogoutModal.styled';
import { handleBackdropClick, handleCloseModal, handleKeyPress, handleLogout } from './Handlers';
import { SvgClose } from './SvgClose';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <Backdrop onClick={handleBackdropClick(dispatch)} tabIndex={-1} />
      <WrapperLogout onKeyDown={handleKeyPress(dispatch)}>
        <LogoutTitle>
          <TitleOne>Log out</TitleOne>
          <SvgClose onClick={handleCloseModal(dispatch)} />
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
