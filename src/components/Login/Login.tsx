import { useAuthContext } from '../../providers/AuthContext';
import { Button, MainSection } from '../Generic';
import { StyledLogin } from './Login.styled';

const Login = () => {
  const { signInWithGoogle, user } = useAuthContext();

  return (
    <MainSection>
      {!user && (
        <StyledLogin>
          <div>
            <h2>Login To Your Account</h2>
            <p>Start using this app to organize your workflow and projects</p>
          </div>

          <Button onClick={signInWithGoogle}>Login With Google</Button>
        </StyledLogin>
      )}
    </MainSection>
  );
};

export default Login;
