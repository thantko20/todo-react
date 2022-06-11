import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import { useState } from 'react';
import Home from './components/Home/Home';

const App = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSideBarOpen);

  return (
    <Routes>
      <Route path='/' element={<Layout toggleSidebar={toggleSidebar} />}>
        <Route index element={<Login />} />
        <Route
          path='/main'
          element={
            <Home isSideBarOpen={isSideBarOpen} toggleSidebar={toggleSidebar} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
