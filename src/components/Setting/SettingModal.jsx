// src/components/Setting/SettingModal.jsx
import { useState } from 'react';
import { CloseSvg } from './closeSvg';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BlockGender,
  BlockPassword,
  GeneralBlock,
  Input,
  InputTitle,
  PasswordLabel,
  SettingAndIcon,
  SettingTitle,
  WrapperSetting,
  Button,
  SaveButton,
  InputWrapper,
  StyledVisibilityOffIcon,
  StyledVisibilityOutIcon,
  Scrollbar,
} from './SettingModal.styled';
import { Backdrop } from '../Logout/UserLogoutModal.styled';
import { GenderBlock } from 'components/Setting/GenderBlock';
import { NameEmailBlock } from './NameEmailBlock';
import { UploadPhoto } from './UploadPhoto';
import * as Yup from 'yup';
import { modalClose } from '../../redux/setingModalSlicer';
import {
  updateNameGenderThunk,
  updatePassworsThunk,
} from '../../redux/user/thunk';
import {
  handleBackdropClick,
  handleCloseModal,
  handleKeyPress,
} from './HandlersSetting';

import { useUser } from '../../hooks/useUser';
import TestUpdateForn from './testUpdateForm';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid'),
  name: Yup.string().min(2, 'Name must be at least 2 characters'),
  password: Yup.string().min(8, 'Password must be at least 8 characters'),
});

export const SettingModal = () => {
  const dispatch = useDispatch();
  const user = useUser().user;

  const [errPass, setErrPass] = useState(null);

  const [updateData, setUpdateData] = useState({
    name: '',
    gender: '',
  });

  const [updatePass, setUpdatePass] = useState({
    oldPass: '',
    newPass: '',
    repeatNewPass: '',
  });

  const getValue = (objValue) => {
    setUpdateData((prev) => ({
      ...prev,
      ...objValue,
    }));
  };

  const handleChangePass = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUpdatePass((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateData.name.length > 0) {
      dispatch(updateNameGenderThunk(updateData));
    }

    const oldP = updatePass.oldPass.length >= 8;
    const newP = updatePass.newPass.length >= 8;
    const repP = updatePass.repeatNewPass === updatePass.newPass;

    if (oldP && newP && repP) {
      dispatch(
        updatePassworsThunk({
          password: updatePass.oldPass,
          newPassword: updatePass.newPass,
        })
      );
    } else {
      setErrPass({ message: 'Error password' });
    }

  };

  // --------------------------------------------------

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const togglePasswordVisibility = (setState) => {
    setState((prevState) => !prevState);
  };

  const notify = () => {
    toast('Default Notification!');
  };

  console.log(errPass);

  return (
    <>
      <Backdrop onClick={handleBackdropClick(dispatch)} />
      <Scrollbar>
        <WrapperSetting onSubmit={handleSubmit}>
          <SettingAndIcon>
            <SettingTitle>Setting</SettingTitle>
            <button
              style={{
                border: 'none',
                background: '#ffffff',
              }}
              // onClick={handleCloseModal(dispatch)}
            >
              <CloseSvg />
            </button>
          </SettingAndIcon>
          <UploadPhoto user={user} />
          <GeneralBlock>
            <BlockGender>
              <GenderBlock getValue={getValue} />
              <NameEmailBlock getValue={getValue} />
            </BlockGender>
            <BlockPassword>
              <InputTitle>Password</InputTitle>
              <InputWrapper>
                <PasswordLabel htmlFor="oldPassword">
                  Outdated password:
                </PasswordLabel>
                <div style={{ position: 'relative' }}>
                  <Input
                    type={showOldPassword ? 'text' : 'password'}
                    name="oldPass"
                    value={updatePass.oldPass}
                    placeholder="Password"
                    onChange={handleChangePass}
                    style={{ color: '#407bff' }}
                  />
                  {showOldPassword ? (
                    <StyledVisibilityOutIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowOldPassword)
                      }
                    />
                  ) : (
                    <StyledVisibilityOffIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowOldPassword)
                      }
                    />
                  )}
                </div>
              </InputWrapper>
              <InputWrapper>
                <PasswordLabel htmlFor="name">New password:</PasswordLabel>
                <div style={{ position: 'relative' }}>
                  <Input
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPass"
                    value={updatePass.newPass}
                    placeholder="Password"
                    onChange={handleChangePass}
                    style={{ color: '#407bff' }}
                  />
                  {showNewPassword ? (
                    <StyledVisibilityOutIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowNewPassword)
                      }
                    />
                  ) : (
                    <StyledVisibilityOffIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowNewPassword)
                      }
                    />
                  )}
                </div>
              </InputWrapper>
              <InputWrapper>
                <PasswordLabel htmlFor="name">
                  Repeat new password:
                </PasswordLabel>
                <div style={{ position: 'relative' }}>
                  <Input
                    type={showRepeatPassword ? 'text' : 'password'}
                    name="repeatNewPass"
                    value={updatePass.repeatNewPass}
                    placeholder="Password"
                    onChange={handleChangePass}
                    style={{ color: '#407bff' }}
                  />
                  {showRepeatPassword ? (
                    <StyledVisibilityOutIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowRepeatPassword)
                      }
                    />
                  ) : (
                    <StyledVisibilityOffIcon
                      onClick={() =>
                        togglePasswordVisibility(setShowRepeatPassword)
                      }
                    />
                  )}
                </div>
              </InputWrapper>
            </BlockPassword>
          </GeneralBlock>
          <Button>
            <SaveButton type="submit">Save</SaveButton>
            <ToastContainer />
          </Button>
        </WrapperSetting>
      </Scrollbar>
    </>
  );
};
