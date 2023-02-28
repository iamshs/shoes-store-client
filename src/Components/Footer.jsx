import React from 'react';
import "../styles/Footer.css"
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import { ExternalLink } from 'react-external-link';
import logo from "../assets/logo.png"

const Footer = () => {
    const today = new Date() ;
    const year = today.getFullYear()
    
    return (
        <footer className='f-container'>
            {/* logo-----part */}
         <div>
           <div className='logo-part'>
           <img style={{width:"60px"}} src={logo} alt="" />
            <h2>ShoesStore</h2>
           </div>
           <div className='f-copyright'>
           <small>Copyright © {year} All Rights Reserved</small>
           </div>
         </div>


            {/* first---part */}
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
             <h3>Visit us</h3>
              <div className='rSide-link'>
              <ExternalLink href="https://example.com">
                <AiFillFacebook className='f-icon' />
              </ExternalLink>
             
             
              <ExternalLink href="https://example.com">
                <AiOutlineInstagram className='f-icon' />
              </ExternalLink>
             
             
              <ExternalLink href="https://example.com">
                <AiFillTwitterSquare className='f-icon' />
              </ExternalLink>
             
             
              <ExternalLink href="https://example.com">
                <AiFillLinkedin className='f-icon' />
              </ExternalLink>
              </div>
             
            </div>
        </footer>
    );
};

export default Footer;