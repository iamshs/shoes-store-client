import React from 'react';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import JoinClub from '../../Components/JoinClub';
import NewArrival from '../../Components/NewArrival';
import Shoes from '../../Components/Shoes';



const Home = () => {
    return (
        <div className='home-container' >
        <Banner />
        <Shoes />
        <NewArrival />
        <JoinClub />
        <Footer />
        </div>
    );
};

export default Home;