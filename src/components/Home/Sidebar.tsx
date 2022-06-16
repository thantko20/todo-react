import { useDataContext } from '../../providers/DataContext';
import { useWindowWidth } from '../../hooks';
import Button from '../Generic/Button';
import { DefaultTab, StyledSidebarContent, TabsContainer } from './Home.styled';

const SidebarContent = () => {
  const { projects } = useDataContext();

  return (
    <StyledSidebarContent>
      <TabsContainer>
        <DefaultTab isActive={true}>Inbox</DefaultTab>
        <DefaultTab isActive={false}>Today</DefaultTab>
      </TabsContainer>

      {projects && (
        <TabsContainer>
          {projects.map((project) => {
            return <li key={project.id}>{project.name}</li>;
          })}
        </TabsContainer>
      )}
      {!projects && (
        <div>
          <p>No Projects Created. Click this button to add one.</p>
          <Button onClick={() => {}}>Add Project</Button>
        </div>
      )}
    </StyledSidebarContent>
  );
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const screenWidth = useWindowWidth();

  return (
    <div>
      {screenWidth >= 768 && (
        <div>
          <SidebarContent />
        </div>
      )}
      {screenWidth < 768 && isOpen && (
        <div
          className={`absolute top-0 left-0 -translate-x-[300px] w-[300px] overflow-hidden will-change-transform transition-transform min-h-screen bg-white shadow-lg pt-20 px-10 ${
            isOpen ? 'translate-x-[300px]' : ''
          }`}
        >
          <SidebarContent />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
