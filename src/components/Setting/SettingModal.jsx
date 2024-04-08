// src/components/Setting/SettingModal.jsx
import { useEffect, useState } from 'react';
import { CloseSvg } from './closeSvg';
import { useDispatch, useSelector } from 'react-redux';
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

import { useAuth } from '../../hooks/useAuth';
const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid'),
  name: Yup.string().min(2, 'Name must be at least 2 characters'),
  password: Yup.string().min(8, 'Password must be at least 8 characters'),
});

export const SettingModal = () => {
  const dispatch = useDispatch();
  const user = useAuth().authUser;

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isValid, setIsValid] = useState(true);

  // -----------------------------------------------------------
  const [data, setData] = useState({
    name: '',
    gender: '',
  });

  const [password, setPassword] = useState({
    oldPass: '',
    newPass: '',
  });

  const handleChangePass = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   const handleKeyDown = handleKeyPress(dispatch);
  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [dispatch]);

  const togglePasswordVisibility = (setState) => {
    setState((prevState) => !prevState);
  };

  const notify = () => {
    toast('Default Notification!');
  };

  const onSave = async () => {
    console.log(data.name.length > 0);

    if (password.newPass.length > 0) {
      dispatch(
        updatePassworsThunk({
          password: password.oldPass,
          newPassword: password.newPass,
        })
      );
    }

    if (data.name.length > 0) {
      dispatch(updateNameGenderThunk({ name: data.name, gender: data.gender }));
    }

    modalClose();
    // if (!isValid) {
    //   notify();
    //   toast.error('Enter valid data, please!');
    // }
    // try {

    // } catch (error) {
    //   notify();
    //   toast.error('An error occurred while saving data.');
    // }
    // return;
  };

  const validate = () => {
    formSchema
      .validate({ email: user.email, name: user.name, password: user.password })
      .then(() => setIsValid(true))
      .catch((error) => {
        console.log(error);
        setIsValid(false);
      });
  };

  return (
    <>
      <Backdrop onClick={handleBackdropClick(dispatch)} />
      <Scrollbar>
        <WrapperSetting
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
              <GenderBlock user={user} date={data} setData={setData} />
              <NameEmailBlock
                user={user}
                validate={validate}
                setData={setData}
                data={data}
              />
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
                    value={password.oldPass}
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
                    value={password.newPass}
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
                    name="newPass"
                    value={password.newPass}
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
            <SaveButton
              /*   disabled={!isValid} */
              type="submit"
              onClick={() => onSave(user.name, user.password, user.genre)}
            >
              Save
            </SaveButton>
            <ToastContainer />
          </Button>
        </WrapperSetting>
      </Scrollbar>
    </>
  );
};
