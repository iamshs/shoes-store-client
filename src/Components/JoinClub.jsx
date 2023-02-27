import React from 'react';
import '../styles/JoinClub.css'
import {BsBoxArrowInRight} from "react-icons/bs"

const JoinClub = () => {
    return (
        <section className='jc-container'>
           <h1>
           JOIN OUR CLUB & GET 15% OFF
            </h1> 
                <button className='jc-btn'>
                    <p> SIGN UP FOR FREE</p>
                    <BsBoxArrowInRight className='jc-icon' />
                    </button>
               
        </section>
    );
};

export default JoinClub;