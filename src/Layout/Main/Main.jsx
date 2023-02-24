import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const Main = () => {
    return (
        <div style={{maxWidth : "150rem" }} >
           <Navbar />
           <Outlet /> 
        </div>
    );
};

export default Main;