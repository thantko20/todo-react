import { useAuthContext } from '../../providers/AuthContext';

const Header = () => {
  const { user, handleSignOut } = useAuthContext();

  return (
    <header className='w-full bg-slate-900 text-gray-50 px-10 py-6 flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Todo-List</h1>
      {user && (
        <button
          onClick={handleSignOut}
          className='px-4 py-2 bg-indigo-500 text-indigo-50 text-sm rounded font-bold hover:bg-indigo-600'
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
