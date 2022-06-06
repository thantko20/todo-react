import { Route, Routes, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const Page1 = () => {
  return <h1>This is page 1</h1>;
};

const Page2 = () => {
  return <h1>This is page 2</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
      </Route>
    </Routes>
  );
};

export default App;
