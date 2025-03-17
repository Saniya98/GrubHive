import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.GrubHive}/>
                <p>At GrubHive, we bring you the authentic taste of slow-cooked food, crafted with love and traditional spices. Order now and enjoy a delicious meal!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>
                    COMPANY
                </h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>
                    GET IN TOUCH
                </h2>
                <ul>
                    <li>+1-212-345-7869</li>
                    <li>contact@grubhive.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025 @ GrubHive.com - All Right Reserved.
        </p>
      
    </div>
  )
}

export default Footer
