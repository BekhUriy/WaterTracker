 import {RegisterForm} from "../../components/RegisterForm/RegisterForm";
import { useDispatch} from 'react-redux';
import { signUpThunk} from "../../redux/auth/thunk";
import { Container, Bottle, FormWraper, Wraper, StyledContainer  } from './Signup.styled';
import { toast } from 'react-toastify';



const SignUpPage = () => {
    const dispatch = useDispatch();

        const notify = () => {
        toast.info('This email is already in use. Please check email or log in', {
            position: "bottom-right",
            autoClose: 3000,
             delay: 1500, 
        })
    }

    const handleSubmit = ({email, password}) => {
        dispatch(signUpThunk({ email, password }))
        notify();
    }
  
    return (
     <Container>
            <Wraper>
            <Bottle />  
                <FormWraper><RegisterForm handleSubmit={handleSubmit} /></FormWraper>
            </Wraper>  
             <StyledContainer />
        </Container> 
                
   
  )
}

export default SignUpPage;