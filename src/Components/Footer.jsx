import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer className='f-container'>
           <div className='l-side'>
           <h3>SUPPORT</h3>
           <div className='lSide-text'>
            <p>Help</p>
            <p>Privacy Policy</p>
            <p>Returns & Exchanges</p>
           </div>
            </div> 

            {/* 2ndpart */}
            <div className='m-side'>
           <h3>COMPANY INFO</h3>
           <div className='mSide-text'>
            <p>About us</p>
            <p>Student Discount</p>
            <p>Our Club</p>
            <p>Military & Healthcare Discount</p>
           </div>
            </div> 

            {/* 3rdPart */}
            <div className='r-side'>

            </div>
        </footer>
    );
};

export default Footer;