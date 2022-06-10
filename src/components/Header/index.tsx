import { useAuthContext } from '../../providers/AuthContext';
import Button from '../Button';
import AccountAvatar from './AccountAvatar';

const Header = () => {
  const { user, handleSignOut } = useAuthContext();

  return (
    <header className='w-full px-10 py-6 flex justify-between items-center bg-white'>
      <h1 className='text-3xl font-bold text-indigo-900'>Todo-List</h1>
      {user && (
        <div className='flex gap-6 items-center'>
          <AccountAvatar
            displayName={user.displayName}
            photoURL={user.photoURL}
          />
          <Button onClick={handleSignOut} variant='secondary'>
            Logout
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
