
import { Link } from "react-router-dom";
import logo1x from './img/Logo@1x.png';
import logo2x from './img/Logo@2x.png';
import { StyledLink } from "./siteLogo.styled";
 

export const SiteLogo = () => {
    return (
        <StyledLink to="/">
            <img
                src={logo1x}
                srcSet={`${logo1x} 1x, ${logo2x} 2x`}
                alt="Logo" 
            />
        </StyledLink>
    );
};