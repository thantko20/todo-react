import { useAuthContext } from '../../providers/AuthContext';
import { Button } from '../Generic';
import AccountAvatar from './AccountAvatar';
import {
  HeaderRight,
  StyledHeader,
  HeaderLeft,
  Logo,
  MeunButton,
} from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: Props) => {
  const { user, handleSignOut } = useAuthContext();

  return (
    <StyledHeader>
      <HeaderLeft>
        <MeunButton>
          <GiHamburgerMenu size='1.2rem' />
        </MeunButton>
        <Logo>todo-list</Logo>
      </HeaderLeft>

      {user && (
        <HeaderRight>
          <AccountAvatar
            displayName={user.displayName}
            photoURL={user.photoURL}
          />
          <Button onClick={handleSignOut}>Logout</Button>
        </HeaderRight>
      )}
    </StyledHeader>
  );
};

export default Header;
