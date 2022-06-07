import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
