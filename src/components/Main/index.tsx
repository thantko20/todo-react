import { useAuthContext } from '../../providers/AuthContext';

const Main = () => {
  const { user } = useAuthContext();

  return <div>{user && <pre>{user.displayName}</pre>}</div>;
};

export default Main;
