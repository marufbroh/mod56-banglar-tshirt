import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='container mx-auto my-8'>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;