import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useDispatch} from 'react-redux';
import { loginThunk} from "../../redux/auth/thunk";
import { Container, Wraper, Bottle, StyledContainer } from "../Signup/Signup.styled";
import { FormWraper } from "./Singin.styled";
import {  toast } from 'react-toastify';





const SignInPage = () => {
    const dispatch = useDispatch();

    const notify = () => {
      toast.info(" Incorrect password or email", {
       position: "bottom-right",
        autoClose: 3000,
        delay: 1000, 
      });
    };
    
    const handleSubmit = ({email,password}) => {
        dispatch(loginThunk({ email, password }))
        notify()
        
    }
    return (
        <Container>
            <Wraper>
            <Bottle/>  
                <FormWraper> <LoginForm handleSubmit={handleSubmit} /></FormWraper>
            </Wraper>  
            <StyledContainer/>
        </Container> 
        
    )
}
export default SignInPage