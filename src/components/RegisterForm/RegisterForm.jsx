
import { Formik} from 'formik';
import {NavForm, Label, Btn, Title,AuthForm, Input, OpenEye, CloseEye, EyesBtn, ErrMessage, TitleForm} from '../LoginForm/LoginForm.styled';
import * as Yup from 'yup';

import  { useState } from 'react';




const validationSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is not valid')
    .min(6, 'Email must be at least 6 characters')
    .max(30, 'Email must not exceed 30 characters')
    .trim()
    .required('Email is required')
    .test('valid-domain', 'Email domain is not valid', function(value) {
      const validDomains = ['com', 'net', 'ua', 'uk', 'org', 'ca'];
      const domain = value.split('@')[1];
      if (!domain) return false;
      const domainSegments = domain.split('.');
      return domainSegments.length === 2 && validDomains.includes(domainSegments[1]);
    }),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Enter the correct password!')
    .required('Confirm password is reqired!'),
});

 export const RegisterForm = ({handleSubmit}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleRepeatPassword = () => {
    setShowRepeatPassword(prevState => !prevState);
  };


  return (
    <>
  <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
        }}
        validationSchema={validationSchema}
 
        onSubmit={(values, actions) => {
          if (values.password === values.repeatPassword) {
            handleSubmit(values)
            actions.resetForm()
          }
        }
        }>
        {({ errors, touched }) => (
          <AuthForm>
            <TitleForm>Sign Up</TitleForm>            
            <Label htmlFor="email"><Title>Enter your email</Title>
              <Input name="email" placeholder="E-mail"  $error={errors.email && touched.email} />
              <ErrMessage name="email" component="div" $error={errors.email && touched.email}  />
            </Label>
            <Label htmlFor="password"><Title>Enter your password</Title>
              <Input   $error={errors.password && touched.password}
                type={showPassword ? 'text' : 'password'} name="password" placeholder="Password"
              />
              <span onClick={togglePassword}>
                {showPassword ? <EyesBtn>{<CloseEye />}</EyesBtn> : <EyesBtn>{<OpenEye />}</EyesBtn>}
              </span>
          
              <ErrMessage name="password" component="div" $error={errors.password && touched.password} />
            </Label>
            <Label htmlFor="repeatPassword"><Title>Repeat Password</Title>
              <Input $error={errors.repeatPassword && touched.repeatPassword}
                type={showRepeatPassword ? 'text' : 'password'} name="repeatPassword" placeholder="Repeat password" />
              <span onClick={toggleRepeatPassword}>
                {showRepeatPassword ? <EyesBtn>{<CloseEye />}</EyesBtn> : <EyesBtn>{<OpenEye />}</EyesBtn>}
              </span>
              <ErrMessage name="repeatPassword" component="div" $error={errors.repeatPassword && touched.repeatPassword} />
            </Label>
            <Btn type="submit">Sign Up</Btn>
          </AuthForm>
        )}
      </Formik>
      <NavForm to='/login'>Sign In</NavForm>
      </>
  )
  
}
