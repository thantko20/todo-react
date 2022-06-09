import { useAuthContext } from '../../providers/AuthContext';

const Login = () => {
  const { handleSignIn, user } = useAuthContext();

  return (
    <div>
      {!user && (
        <button
          onClick={handleSignIn}
          className='px-4 py-2 bg-indigo-500 text-indigo-100 font-bold rounded transition-colors hover:bg-indigo-600'
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
