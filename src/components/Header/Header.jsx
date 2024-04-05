import { UserAuth } from './UserAuth/UserAuth';
import { UserButton } from './userButton/userButton';
import { Block, HeaderStyled } from './header.styled';
import { useSelector } from 'react-redux';
import { SiteLogo } from './siteLogo/siteLogo';
import { isLoggedInSelector } from '../../redux/auth/selectors';

const Header = () => {
  const isLogin = useSelector(isLoggedInSelector);

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
