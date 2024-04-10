import * as Yup from 'yup';

import { Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import {
  CloseEye,
  OpenEye,
  EyesBtn,
  WrapBlock,
  Label,
  Button,
  FormContainer,
  Input,
  Title,
  Div,
  WrapGender,
  FirstWrap,
  NextTitle,
} from './testUpdateform.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string(),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.'),
  newPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.'),
  repeatNewPassword: Yup.string().required('Confirm password is required!'),
});

const TestUpdateForn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleNewPassword = () => {
    setShowNewPassword((prevState) => !prevState);
  };
  const toggleRepeatNewPassword = () => {
    setShowRepeatNewPassword((prevState) => !prevState);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={{
          gender: '',
          name: '',
          email: '',
          password: '',
          newPassword: '',
          repeatNewPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (values.newPassword === values.repeatNewPassword) {
            handleSubmit(values);
            console.log(values);
            actions.resetForm();
          }
        }}
      >
        <FormContainer>
          <FirstWrap>
            <Title>Your gender identity</Title>
            <WrapGender>
              <Label>
                <Field type="radio" name="gender" value="Man" />
                Man
              </Label>
              <Label>
                <Field type="radio" name="gender" value="Woman" />
                Woman
              </Label>
              <Label>
                <Field type="radio" name="gender" value="Abstain" />
                Abstain
              </Label>
            </WrapGender>
            <Label htmlFor="name">
              <NextTitle>Your name</NextTitle>
              <Input name="name" placeholder="name" />
            </Label>
            <Label htmlFor="email">
              <NextTitle>Your E-mail</NextTitle>
              <Input name="email" placeholder="email" type="email" />
            </Label>
          </FirstWrap>
          <WrapBlock>
            <Title>Password</Title>
            <Label htmlFor="password">
              <Div>Outdated password:</Div>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              <EyesBtn onClick={togglePassword}>
                {showPassword ? (
                  <EyesBtn>{<CloseEye />}</EyesBtn>
                ) : (
                  <EyesBtn>{<OpenEye />}</EyesBtn>
                )}
              </EyesBtn>
              <ErrorMessage name="password" component="div" />
            </Label>
            <Label htmlFor="newPassword">
              <Div>New Password:</Div>
              <Input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                placeholder="New Password"
              />
              <EyesBtn onClick={toggleNewPassword}>
                {showPassword ? (
                  <EyesBtn>{<CloseEye />}</EyesBtn>
                ) : (
                  <EyesBtn>{<OpenEye />}</EyesBtn>
                )}
              </EyesBtn>
              <ErrorMessage name="newPassword" component="div" />
            </Label>

            <Label htmlFor="repeatPassword">
              <Div>Repeat new password:</Div>
              <Input
                type={showRepeatNewPassword ? 'text' : 'password'}
                name="repeatNewPassword"
                placeholder="Repeat password"
              />
              <EyesBtn onClick={toggleRepeatNewPassword}>
                {showPassword ? (
                  <EyesBtn>{<CloseEye />}</EyesBtn>
                ) : (
                  <EyesBtn>{<OpenEye />}</EyesBtn>
                )}
              </EyesBtn>
              <ErrorMessage name="repeatNewPassword" component="div" />
            </Label>
            <Button type="submit">Save</Button>
          </WrapBlock>
        </FormContainer>
      </Formik>
    </>
  );
};

export default TestUpdateForn;
