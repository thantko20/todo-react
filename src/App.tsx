import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Main from './components/Main';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Route>
    </Routes>
  );
};

export default App;
