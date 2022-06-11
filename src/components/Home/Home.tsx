import { useAuthContext } from '../../providers/AuthContext';
import { DataProvider } from '../../providers/DataContext';
import { MainSection } from '../Generic';
import Sidebar from './Sidebar';

interface Props {
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
}

const Home = ({ isSideBarOpen, toggleSidebar }: Props) => {
  const { user } = useAuthContext();

  return (
    <DataProvider>
      <MainSection>
        <Sidebar isOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />
      </MainSection>
    </DataProvider>
  );
};

export default Home;
