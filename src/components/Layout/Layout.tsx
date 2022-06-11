import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../providers/AuthContext';
import Header from '../Header/Header';
import { StyledLayout } from './Layout.styled';

interface Props {
  toggleSidebar: () => void;
}

const Layout = ({ toggleSidebar }: Props) => {
  return (
    <StyledLayout>
      <AuthProvider>
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />
      </AuthProvider>
    </StyledLayout>
  );
};

export default Layout;
