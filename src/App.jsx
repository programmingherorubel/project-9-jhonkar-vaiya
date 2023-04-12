import React from 'react';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
        <Navbar />
            <Outlet></Outlet>
        <Footer/>
        </>
    );
};

export default App;