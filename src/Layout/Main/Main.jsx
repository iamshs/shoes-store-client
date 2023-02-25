import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';



const Main = () => {
    return (
        <div style={{maxWidth : "150rem" }} >
           <Nav />
           <Outlet /> 
        </div>
    );
};

export default Main;