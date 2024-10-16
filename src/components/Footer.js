import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-con'>
                <div className='footer-text'>
                    <h3>Designed & developed by: <span>Gideon Bawa</span></h3>
                    <p>Contact me on those social handles</p>
                </div>
                <div className='footer-icons'>
                    <a href="https://github.com/gidi007" target='_blank' className='home_social_icon'><FaGithub className='text-white FaFo' /></a>
                    <a href="https://www.linkedin.com/in/kierian-tirian-00838224b/" target='_blank' className='home_social_icon'><FaLinkedin className='text-white FaFo' /></a>
                    <a href="https://wa.me/2348172824147" target='_blank' className='home_social_icon'><FaWhatsapp className='text-white FaFo' /></a>
                </div>    
            </div>
        </section>
    )
}

export default Footer