import React from 'react'
import logo from "../assets/img/footer-logo.png"
import Button from "./Button"
import { Dropdown, message } from 'antd';
import { MdAlternateEmail, MdSupportAgent } from "react-icons/md"
import { footerSocialMedia, emailsDropdownLists as items } from '../mocks'

const Footer = () => {


    const menuOnClick = ({ key }) => {
        const email = "spinandlearn@gmail.com"
        const body = ""
        const subject = ""

        switch (key) {
            case "gmail":
                window.open(`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${email}&su=${subject}&body=${body}`, "_blank")
                break;
            case "outlook":
                window.open(`https://outlook.live.com/mail/0/deeplink/compose/?to=${email}&subject=${subject}&body=${body}`, "_blank")
                break;
            case "yahoo":
                window.open(`https://compose.mail.yahoo.com/?to=${email}&subject=${subject}&body=${body}`, "_blank")
                break;
            default:
                navigator.clipboard.writeText(email)
                message.success(email + 'had been copied');
                break;
        }
    }

    return (
        <div className="Footer mt-1">
            <div className="container main">
                <div className="col-1-footer left col-4">
                    <a href="/" className="logo-footer w-inline-block mb-3">
                        <img src={logo} loading="lazy" alt="" className="colored-logo-footer" />
                    </a>
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div className="div-block">
                        <div className="mb-3 d-flex">
                            <MdAlternateEmail style={{ fontSize: 50, background: "#F1C510", padding: 10, borderRadius: 10, color: "white" }} />

                            <Dropdown menu={{ items, onClick: (e) => menuOnClick(e) }} className='hover' trigger={['hover']} arrow placement="bottom" >
                                <span className="hover ms-3">
                                    spinandlearn@gmail.com
                                </span>
                            </Dropdown>

                        </div>
                        <div className="mb-3 d-flex">
                            <MdSupportAgent style={{ fontSize: 50, background: "#E4092E", padding: 10, borderRadius: 10, color: "white" }} />
                            <span className='ms-3'>1+ (000) - 000-0000</span>
                        </div>
                        <div className="d-flex">
                            {footerSocialMedia.map((media, key) => (
                                <a key={"footerSocialMedia" + key} href={media.link} rel="noreferrer" target="_blank">
                                    <div className="mb-3 ms-1">
                                        {media.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="mb-3 mt-3">
                            <Button
                                onClick={() => window.location.href = "/programs"}
                                title={"Get Programs"}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-1-footer center col-4 mt-5">
                    <p className="body-02---18px regular title ms-3">
                        Navigate to:
                    </p>

                    <div className="div-block">
                        <a href="/programs">Programs</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/events">Events</a>
                        <a href="/store">Store</a>
                        <a href="/login">Login</a>
                        <a href="/signup">Signup</a>
                    </div>
                </div>
            </div>
            <div className="copyright-section">
                <div className="copyright-text-wrap container">
                    <span className="copyright-text">© 2023 Spin & learn - All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
