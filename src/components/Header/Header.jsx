import {UserAuth} from './UserAuth/UserAuth';
import {UserButton} from './userButton/userButton';
import {Block, HeaderStyled} from './header.styled';
import {SiteLogo} from './siteLogo/siteLogo';
import {useAuth} from "../../hooks/useAuth.js";

const Header = () => {
  const isLogin = useAuth().authToken;

  return (
    <HeaderStyled>
      <div>
        <SiteLogo />
      </div>
      <Block>{!isLogin ? <UserAuth /> : <UserButton />}</Block>
    </HeaderStyled>
  );
};

export default Header;
