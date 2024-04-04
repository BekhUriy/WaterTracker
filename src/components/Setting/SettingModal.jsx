import { useState } from 'react';
import { CloseSvg } from '../CloseSvg';
import notify from 'notify';
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

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  name: Yup.string()
    .name('Enter a valid name')
    .required('Name is requared')
    .min(2),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Enter the correct password')
});

export const SettingModal = ({
  user,
  modalClose,
  handleBackdropClick,
  handleKeyPress,
}) => {
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

  const onSave = async (name, email, password) => {
    try {
      await updateProfileThunk({ name, email, password });
      console.log('Data saved successfully');
      modalClose();
    } catch (error) {
      notify.show('An error occurred while saving data.', 'error');
    }
  };

  const validate = () => {
    formSchema.validate({ email: user.email, name:user.name, password:user.password })
      .then(() => setIsValid(true) )
      .catch((error) => setIsValid(false));
  }

  return (
    <>
      <WrapperSetting onClick={handleBackdropClick} onKeyDown={handleKeyPress}>
        <SettingAndIcon>
          <SettingTitle>Setting</SettingTitle>
          <CloseSvg onClick={modalClose} />
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
        </Button>
      </WrapperSetting>
    </>
  );
};
