
import { Link } from "react-router-dom";
import logo1x from './img/Logo@1x.png';
import logo2x from './img/Logo@2x.png';
import {LogoImg} from './siteLogo.styled'

 

export const SiteLogo = () => {
    return (
        <Link to="/">
            <LogoImg
                src={logo1x}
                srcSet={`${logo1x} 1x, ${logo2x} 2x`}
                alt="Logo" 
            />
        </Link>
    );
};