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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1008px;
  height: 592px;
  padding: 32px 24px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const SettingAndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 960px;
  height: 32px;
  gap: 756px;
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
  gap: 24px;
  width: 960px;
  height: 272px;
`;
export const Gender = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 182px;
  height: 52px;
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
  gap: 6px;
`;

export const BlockGender = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  width: 392px;
  box-sizing: border-box;
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
  width: 544px;
  box-sizing: border-box;
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
  margin-left: auto;
  display: flex;
  box-sizing: border-box;
  border: 0;
  max-width: 160px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: #407bff;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #407bff;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  border: 0;
  width: 100px;
  padding: 0;
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
