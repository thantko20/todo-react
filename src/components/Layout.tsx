import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../providers/AuthContext';
import Header from './Header';

const Layout = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </div>
  );
};

export default Layout;
