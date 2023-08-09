import React from 'react';
import { Form, Input, Dropdown, message } from 'antd';
import contact from "../assets/support.svg"
import Button from "../components/Button"
import { SendOutlined } from '@ant-design/icons';

const Contact = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input

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
        <div className="Contact mt-5">
            <div className="form">
                <div className="mb-5 title">
                    <h3>
                        <span>Contact</span> Us
                    </h3>
                    <span>You can reach anytime via
                        <Dropdown className='hover' trigger={['hover']} arrow placement="bottom" menu={menuProps}>
                            <span className="hover">
                                info@mailgo.dev
                            </span>
                        </Dropdown>
                    </span>
                </div>
                <Form form={form} layout="vertical">
                    <div className="input-group">
                        <Form.Item className='col-6' label="Full Name" required tooltip="This is a required field">
                            <Input placeholder="Full Name" />
                        </Form.Item>
                        <Form.Item className='col-6' label="Email" required tooltip="This is a required field">
                            <Input placeholder="Email" />
                        </Form.Item>
                    </div>
                    <div className="input-group">
                        <Form.Item className='col-6' label="Phone Number" required tooltip="This is a required field">
                            <Input placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item className='col-6' label="Field A" required tooltip="This is a required field">
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </div>
                    <div className="input-group">
                        <Form.Item label="TextArea" style={{ width: "100%" }}>
                            <TextArea rows={7} />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button onClick={() => window.location.href = "/programs"} height={45} title={"Get Programs"} />
                    </Form.Item>
                </Form>
            </div>
            <div className="icon">
                <img src={contact} alt="" srcSet="" />
            </div>
        </div>
    )
}

export default Contact
