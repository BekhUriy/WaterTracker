import { useState } from 'react';
import { CloseSvg } from './CloseSvg';
import { useSelector, useDispatch } from 'react-redux';
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
} from './SettingModal.styled';
import { GenderBlock } from 'components/Setting/GenderBlock';
import { NameEmailBlock } from './NameEmailBlock';
import { UploadPhoto } from './UploadPhoto';
import * as Yup from 'yup';
import { modalClose } from '../../redux/setingModalSlicer';
import { updateApiThunk } from '../../redux/user/thunk';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});


export const SettingModal = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isValid, setIsValid] = useState(true);

  const togglePasswordVisibility = setState => {
    setState(prevState => !prevState);
  };


  const notify = ()=>{toast("Default Notification!")}
  const onSave = async (name, email, password) => {
    if (!isValid) {
        notify();
        toast.error("Enter valid data, please!");
      }
    try {

      await updateApiThunk({ name, email, password });
      console.log('Data saved successfully');
      modalClose();
    } catch (error) {
      notify();
      toast.error('An error occurred while saving data.');
    }
  };

  const validate = () => {
    formSchema.validate({ email: user.email, name: user.name, password: user.password })
      .then(() => setIsValid(true))
      .catch((error) =>{
        console.log(error);
        setIsValid(false)});
  }

  return (
    <>
      <WrapperSetting onClick={dispatch(modalClose())} onKeyDown={()=>dispatch(modalClose())}>
        <SettingAndIcon>
          <SettingTitle>Setting</SettingTitle>
          <CloseSvg onClick={()=>dispatch(modalClose())} />
        </SettingAndIcon>
        <UploadPhoto />
        <GeneralBlock>
          <BlockGender >
            <GenderBlock user={user} onSave={onSave} />
            <NameEmailBlock user={user} validate={validate} />
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
                  name="oldPassword"
                  value={showOldPassword ? oldPassword : ''}
                  placeholder="Password"
                  onChange={e => setOldPassword(e.target.value)}
                  style={{ color: '#407bff' }}
                />
                {showOldPassword ? (
                  <StyledVisibilityOutIcon
                    onClick={() => togglePasswordVisibility(setShowOldPassword)}
                  />
                ) : (
                  <StyledVisibilityOffIcon
                    onClick={() => togglePasswordVisibility(setShowOldPassword)}
                  />
                )}
              </div>
            </InputWrapper>
            <InputWrapper>
              <PasswordLabel htmlFor="name">New password:</PasswordLabel>
              <div style={{ position: 'relative' }}>
                <Input
                  type={showNewPassword ? 'text' : 'password'}
                  name="password"
                  value={showNewPassword ? newPassword : ''}
                  placeholder="Password"
                  onChange={e => setNewPassword(e.target.value)}
                  style={{ color: '#407bff' }}
                />
                {showNewPassword ? (
                  <StyledVisibilityOutIcon
                    onClick={() => togglePasswordVisibility(setShowNewPassword)}
                  />
                ) : (
                  <StyledVisibilityOffIcon
                    onClick={() => togglePasswordVisibility(setShowNewPassword)}
                  />
                )}
              </div>
            </InputWrapper>
            <InputWrapper>
              <PasswordLabel htmlFor="name">Repeat new password:</PasswordLabel>
              <div style={{ position: 'relative' }}>
                <Input
                  type={showRepeatPassword ? 'text' : 'password'}
                  name="password"
                  value={showRepeatPassword ? repeatPassword : ''}
                  placeholder="Password"
                  onChange={e => setRepeatPassword(e.target.value)}
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
          <SaveButton disabled={!isValid} type="submit" onClick={() => onSave(user.name, user.email)} >Save</SaveButton>
          <ToastContainer/>
        </Button>
      </WrapperSetting>
    </>
  );
};
