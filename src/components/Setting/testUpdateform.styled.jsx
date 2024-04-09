import styled from 'styled-components';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const CloseEye = styled(VisibilityRoundedIcon)`
  width: 13px;
  height: 12px;
  color: rgba(64, 123, 255, 1);
`;

export const OpenEye = styled(VisibilityOffOutlinedIcon)`
  width: 13px;
  height: 12px;
  color: rgba(64, 123, 255, 1);
`;

export const EyesBtn = styled.span`
  display: block;
  position: absolute;
  bottom: 6px;
  right: 12px;
`;

export const WrapBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 256px;
  gap: 12px;

  @media screen and (min-width: 768px) {
    min-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 544px;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 256px;
  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const FirstWrap = styled.div`
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  min-width: 256px;
  @media screen and (min-width: 768px) {
    min-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 544px;
  }
  Label {
    margin-bottom: 24px;
  }
`;

export const FormContainer = styled(Form)`
  display: block;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 960;
  }
`;

export const Input = styled(Field)`
  position: relative;
  font-family: Roboto;
  font-weight: 400;
  text-align: left;
  font-family: inherit;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding-top: 12px;
  padding-bottom: 12px;
  color: blue;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(158, 187, 255);
    position: absolute;
    left: 10px;
  }
`;

export const Title = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  color: #2f2f2f;
  margin-bottom: 12px;
`;

export const NextTitle = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  color: #2f2f2f;
  margin-bottom: 8px;
`;

export const Div = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  text-align: left;
  margin-bottom: 8px;
`;

export const WrapGender = styled.div`
  margin-bottom: 52px;
  margin-top: 12px;
`;

export const Button = styled.div`
  position: absolute;
  bottom: -68px;
  right: 0px;
  display: block;
  margin-left: auto;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 44px;
  padding: 10px 30px 10px 30px;
  gap: 10px;
  border-radius: 10px;
  opacity: 0px;

  border-color: transparent;
  color: #fff;
  background-color: #407bff;
  @media screen and (min-width: 768px) {
    padding: 10px 30px 10px 30px;
  }
`;
