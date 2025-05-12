import React from 'react';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className='poppins w-full lg:w-10/12 mx-auto'>
      <header>
        <Navbar></Navbar>
      </header>
    </div>
  );
};

export default RootLayout;