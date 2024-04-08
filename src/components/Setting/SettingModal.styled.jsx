import styled from 'styled-components';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid grey;
  border-radius: 50%;
  background-image: ${({ src }) => (src ? `url(${src})` : 'none')};
  background-size: cover;
  background-position: center;
`;

export const WrapperSetting = styled.form`
  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 12px;
  min-width: 280px;
  max-height: 90vh;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
  max-width: 1008px;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const Scrollbar = styled.div`
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
  }
`;

export const SettingAndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 32px;
`;

export const SettingTitle = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  color: #2f2f2f;
`;

export const YourPhoto = styled.h2`
  display: flex;
  color: #2f2f2f;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin: 0;
`;

export const UploadPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Label = styled.label`
  display: flex;
  gap: 8px;
  text-decoration: none;
  color: #407bff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const GeneralBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 256px;
  height: auto;

  @media (min-width: 768px) {
    width: 544px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    min-width: 960px;
  }
`;
export const Gender = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 256px;
  height: 52px;

  @media (min-width: 768px) {
    width: 392px;
  }
`;

export const GenderTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #2f2f2f;
  width: 100%;
  height: 20px;
`;

export const InputsRadio = styled.div`
  display: flex;
  gap: 24px;
`;

export const InputGender = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 6px;
  }
`;

export const BlockGender = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 256px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 392px;
  }
  @media (min-width: 1440px) {
    gap: 52px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 168px;
`;

export const BlockInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 72px;
`;

export const InputTitle = styled(GenderTitle)``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  transition: border-color 0.3s;
  box-sizing: border-box;

  &::placeholder {
    color: #d7e3ff;
    font-weight: 400px;
    font-size: 16px;
    line-height: 20px;
  }
  &:hover,
  &:focus,
  &:active {
    border: 2px solid #407bff;
    outline: none;
  }
`;

export const BlockPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 256px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 392px;
  }
`;

export const PasswordLabel = styled.label`
  font-weight: 400px;
  font-size: 16px;
  line-height: 20px;
  color: #2f2f2f;
  height: 20px;

  &::placeholder {
    font-weight: 400px;
    font-size: 16px;
    line-height: 20px;
    color: #9ebbff;
    height: 20px;
  }
`;

export const Button = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 0;
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding: 8px 30px;
  background-color: #407bff;

  @media (min-width: 768px) {
    margin-left: auto;
    max-width: 160px;
    padding: 10px 30px;
    height: 44px;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #407bff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  border: 0;
  width: 100%;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledVisibilityOffIcon = styled(VisibilityOffOutlinedIcon)`
  && {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #407bff;
    width: 16px;
    height: 16px;
  }
`;

export const StyledVisibilityOutIcon = styled(VisibilityOutlinedIcon)`
  && {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #407bff;
    width: 16px;
    height: 16px;
  }
`;
