import React from 'react'
import logo from "../assets/img/footer-logo.png"
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa'
import Button from "./Button"

const Footer = () => {
    const icons = [
        { link: "https://www.instagram.com/spinandlearn", icon: <FaInstagram size={15} color='white' /> },
        { link: "https://www.facebook.com/spinandlearn1", icon: <FaFacebook size={15} color='white' /> },
        { link: "https://www.youtube.com/@spinandlearn", icon: <FaTwitter size={15} color='white' /> },
        { link: "https://www.linkedin.com/company/spinandlearn/", icon: <FaLinkedin size={15} color='white' /> },
        { link: "https://twitter.com/spinandlearn", icon: <FaYoutube size={15} color='white' /> }
    ]
    return (
        <div className="Footer">
            <div className="left">
                <img src={logo} alt="" srcset="" />
                <div className="medias">
                    {icons.map((icon, key) => (
                        <a className='hover' target="_blank" key={key} href={icon.link}>
                            <div className="icon">
                                {icon.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="center">
                <div>
                    <div className='items'>
                        <div className="icon">
                            <FaPhone size={15} color='white' />
                        </div>
                        <h1>+1 (425) 531-2997</h1>
                    </div>
                    <div className='items'>
                        <div className="icon">
                            <FaEnvelope size={15} color='white' />
                        </div>
                        <h1>spinandlearn@gmail.com</h1>
                    </div>
                </div>
                <div>
                    <div className='items hover'>
                        <h1 style={{ textDecoration: "underline" }}>Terms of Use</h1>
                    </div>
                    <div className='items hover'>
                        <h1 style={{ textDecoration: "underline" }}>Privacy Policy</h1>
                    </div>
                    <div className='items hover'>
                        <h1 style={{ textDecoration: "underline" }}>Cookie Policy</h1>
                    </div>
                    <div className='items'>
                        <h1>© Spin and Learn. All Rights Reserved.</h1>
                    </div>
                </div>
            </div>
            <div className="center">
                <div>
                    <div className='items'>
                        <Button
                            onClick={() => window.location.href = "/forms"}
                            title={"Get Programs"}
                        />
                    </div>
                    <div className='items'>
                        <h1 className='ps-3'>Existing user? <span className='hover' style={{ textDecoration: "underline" }}>Sign in</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
