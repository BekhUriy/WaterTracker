
import { Link } from 'react-router-dom';
import { UserLogoSvg } from '../userLogoSvg/userLogoSvg';
import { SignInStyled } from './UserAuth.styled';

export const UserAuth = () => {
  return (
    <Link to="/login">
    <SignInStyled type="button">
      Sign In <UserLogoSvg />
    </SignInStyled>
    </Link>
  );
};
