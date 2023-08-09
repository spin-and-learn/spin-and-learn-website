import React from 'react'
import logo from "../assets/img/footer-logo.png"
import Button from "./Button"
import { Dropdown, message } from 'antd';
import { MdAlternateEmail, MdSupportAgent } from "react-icons/md"
import { footerSocialMedia } from '../mocks'
import { SendOutlined } from '@ant-design/icons';

const Footer = () => {

    const items = [
        {
            label: (
                <span style={{ display: "flex", alignItems: "center", color: 'red' }}>
                    <SendOutlined style={{ fontSize: 14 }} />
                    <span className="ms-2" >open in Gmail</span>
                </span>
            ),
            key: 'gmail'
        },
        {
            label: (
                <span style={{ display: "flex", alignItems: "center", color: '#0972CE' }}>
                    <SendOutlined style={{ fontSize: 14 }} />
                    <span className="ms-2" >open in Outlook</span>
                </span>
            ),
            key: 'outlook'
        },
        {
            label: (
                <span style={{ display: "flex", alignItems: "center", color: '#666AF6' }}>
                    <SendOutlined style={{ fontSize: 14 }} />
                    <span className="ms-2" >open in Yahoo</span>
                </span>
            ),
            key: 'yahoo'
        },
        {
            label: (
                <span style={{ display: "flex", alignItems: "center", color: 'gray' }}>
                    <SendOutlined style={{ fontSize: 14 }} />
                    <span className="ms-2" >Copy Email</span>
                </span>
            ),
            key: 'copy'
        },

    ]

    const menuOnClick = ({ key }) => {
        const email = "spinandlearn@gmail.com"

        switch (key) {
            case "gmail":
                window.open(`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${email}`, "_blank")
                break;
            case "outlook":
                window.open(`https://outlook.live.com/mail/0/deeplink/compose/?to=${email}`, "_blank")
                break;
            case "yahoo":
                window.open(`https://compose.mail.yahoo.com/?to=${email}`, "_blank")
                break;
            default:
                navigator.clipboard.writeText(email)
                message.success(email + 'had been copied');
                break;
        }
    }

    const menuProps = {
        items,
        onClick: menuOnClick,
    }


    return (
        <div className="Footer mt-1">
            <div className="container main">
                <div class="col-1-footer left col-4">
                    <a href="/" class="logo-footer w-inline-block mb-3">
                        <img src={logo} loading="lazy" alt="" class="colored-logo-footer" />
                    </a>
                    <p class="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div class="div-block">
                        <div className="mb-3 d-flex">
                            <MdAlternateEmail style={{ fontSize: 50, background: "#F1C510", padding: 10, borderRadius: 10, color: "white" }} />

                            <Dropdown className='hover' trigger={['hover']} arrow placement="bottom" menu={menuProps}>
                                <span className="hover ms-3">
                                    spinandlearn@gmail.com
                                </span>
                            </Dropdown>

                        </div>
                        <div className="mb-3 d-flex">
                            <MdSupportAgent style={{ fontSize: 50, background: "#E4092E", padding: 10, borderRadius: 10, color: "white" }} />
                            <span className='ms-3'>1+ (000) - 000-0000</span>
                        </div>
                        <div class="d-flex">
                            {footerSocialMedia.map((media, key) => (
                                <a href={media.link} rel="noreferrer" target="_blank">
                                    <div key={"footerSocialMedia" + key} className="mb-3 ms-1">
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
                <div class="col-1-footer center col-4 mt-5">
                    <p class="body-02---18px regular title ms-3">
                        Navigate to:
                    </p>

                    <div class="div-block">
                        <a href="/programs">Programs</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/events">Events</a>
                        <a href="/store">Store</a>
                        <a href="/login">Login</a>
                        <a href="/signup">Signup</a>
                    </div>
                </div>
            </div>
            <div class="copyright-section">
                <div class="copyright-text-wrap container">
                    <span class="copyright-text">© 2023 Spin & learn - All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
