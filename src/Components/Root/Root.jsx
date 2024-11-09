import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';
const Root = () => {
    return (
        <div className=" mx-auto max-w-screen-2xl">
          <Toaster />
          <Navbar></Navbar>
            <Outlet></Outlet>
          <Footer ></Footer>
        </div>
    );
};

export default Root;