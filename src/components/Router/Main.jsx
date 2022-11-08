import React from 'react';
import HomePage from '../pages/HomePage';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    );
};

export default Main;