import{r as x,j as s,u as h,b as j,S as u}from"./index-664313d0.js";import{c as w,a as n,F as g}from"./index.esm-11e92b63.js";import{A as E,T as S,L as l,a as m,I as d,E as p,b as c,C as f,O as F,B as y,N as b}from"./LoginForm.styled-c0ce11a6.js";import{C as v,W as C,B as $,S as B}from"./Signup.styled-77220bc5.js";import{B as I}from"./react-toastify.esm-1c02db08.js";const P=w().shape({email:n().email("Enter a valid email").matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/,"Email is not valid").required("Email is required"),password:n().required("Password is required").min(8,"Enter the correct password")}),q=({handleSubmit:i})=>{const[r,o]=x.useState(!1),t=()=>{o(e=>!e)};return s.jsxs(s.Fragment,{children:[s.jsx(g,{initialValues:{email:"",password:""},validationSchema:P,onSubmit:(e,a)=>{i(e),a.resetForm()},children:({errors:e,touched:a})=>s.jsxs(E,{children:[s.jsx(S,{children:"Sign In"}),s.jsxs(l,{htmlFor:"email",children:[s.jsx(m,{children:"Enter your email"}),s.jsx(d,{$error:e.email&&a.email,name:"email",placeholder:"E-mail"}),s.jsx(p,{name:"email",component:"div",$error:e.email&&a.email})]}),s.jsxs(l,{htmlFor:"password",children:[s.jsx(m,{children:"Enter your password"}),s.jsx(d,{$error:e.password&&a.password,type:r?"text":"password",name:"password",placeholder:"Password"}),s.jsxs("span",{onClick:t,children:[" ",r?s.jsx(c,{children:s.jsx(f,{})}):s.jsx(c,{children:s.jsx(F,{})})]}),s.jsx(p,{name:"password",component:"div",$error:e.password&&a.password})]}),s.jsx(y,{type:"submit",children:"Sign In"})]})}),s.jsx(b,{to:"/signup",children:"Sign Up"})]})},T=h.div`
margin-top: 66px;
@media screen and (min-width: 768px ) {
position: absolute;
top: 40px;
left: 0px;

}
@media screen and (min-width: 1440px) {
  left: auto;
  top: 162px;
  right: 104px;
}
 `,O=()=>{const i=j(),r=()=>{I.info(" Incorrect password or email",{position:"bottom-right",autoClose:3e3,delay:1e3})},o=({email:t,password:e})=>{i(u({email:t,password:e})),r()};return s.jsxs(v,{children:[s.jsxs(C,{children:[s.jsx($,{}),s.jsxs(T,{children:[" ",s.jsx(q,{handleSubmit:o})]})]}),s.jsx(B,{})]})};export{O as default};
