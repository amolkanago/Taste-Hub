import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="image1" src={assets.logo} alt="" />
            <p>"Feast your eyes on a smorgasbord of culinary delights! Dive into a world of taste sensations with our extensive menu offerings. From hearty classics to exotic delicacies, your next culinary adventure awaits. Order now and let the flavors speak for themselves!"</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 812 509 5448</li>
                <li>contact@tatsehub.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © TasteHub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
