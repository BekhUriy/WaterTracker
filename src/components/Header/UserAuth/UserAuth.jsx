
import { Link } from 'react-router-dom';
import { UserLogoSvg } from '../userLogoSvg/userLogoSvg';
import { SignInStyled } from './UserAuth-style';

export const UserAuth = () => {
  return (
    <Link to="/login">
    <SignInStyled type="button" media>
      Sign In <UserLogoSvg />
    </SignInStyled>
    </Link>
  );
};
