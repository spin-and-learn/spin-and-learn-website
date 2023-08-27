import React from 'react';
import { Form, Input, Dropdown, message } from 'antd';
import contact from "../assets/support.svg"
import Button from "../components/Button"
import { SendOutlined } from '@ant-design/icons';
import { emailsDropdownLists as items } from '../mocks';


const Contact = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input

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


    return (
        <div className="Contact mt-5">
            <div className="form">
                <div className="mb-5 title">
                    <h3>
                        <span>Contact</span> Us
                    </h3>
                    <span>You can reach anytime via
                        <Dropdown className='hover' trigger={['hover']} arrow placement="bottom" menu={{ items, onClick: (e) => menuOnClick(e) }}>
                            <span className="hover">
                                spinandlearn@gmail.com
                            </span>
                        </Dropdown>
                    </span>
                </div>
                <Form form={form} layout="vertical">
                    <div className="input-group">
                        <Form.Item className='col-6' label="First Name" required tooltip="This is a required field">
                            <Input placeholder="First Name" />
                        </Form.Item>
                        <Form.Item className='col-6' label="Last Name" required tooltip="This is a required field">
                            <Input placeholder="Last Name" />
                        </Form.Item>
                    </div>
                    <div className="input-group">
                        <Form.Item className='col-6' label="Phone Number" required tooltip="This is a required field">
                            <Input placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item className='col-6' label="Email" required tooltip="This is a required field">
                            <Input placeholder="Email" />
                        </Form.Item>
                    </div>
                    <div className="input-group">
                        <Form.Item label="Message" required tooltip="This is a required field" style={{ width: "100%" }}>
                            <TextArea placeholder="Message" />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button onClick={() => window.location.href = "/programs"} height={45} title={"Get Programs"} />
                    </Form.Item>
                </Form>
            </div>
            <div className="icon">
                <img src={contact} alt="contact" />
            </div>
        </div>
    )
}

export default Contact
