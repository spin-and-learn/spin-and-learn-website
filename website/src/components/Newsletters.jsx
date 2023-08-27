import React, { useState } from 'react'
import Button from './Button'
import { Select, Form, Input, Dropdown, Space } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const Newsletters = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [jobRole, setJobRole] = useState("Jack")
    const [solutionInterest, setSolutionInterest] = useState("Jack")
    const [form] = Form.useForm();

    const onChange = (e) => {
        switch (e.id) {
            case "fullName":
                setFullName(e.value)
                break;
            case "email":
                setEmail(e.value)
                break;
            case "jobRole":
                setJobRole(e.value)
                break;
            case "solutionInterest":
                setSolutionInterest(e.value)
                break;
            default:
                break;

        }
        console.log({
            fullName,
            email,
            jobRole,
            solutionInterest
        })
    }

    const items = [
        {
            key: 'Jack',
            label: 'Jack'
        },
        {
            key: 'Lucy',
            label: 'Lucy'
        },
        {
            key: 'Tom',
            label: 'Tom'
        }
    ]


    const onDropdown = (value, type) => {
        if (type === "solutionInterest")
            setSolutionInterest(value)
        else if (type === "jobRole")
            setJobRole(value)

    }

    return (
        <div className="Newsletters mb-5">
            <div className="wrap container">
                <section className="right mt-4">
                    <h1>Subscribe for our Newsletter!</h1>
                    <p>
                        Are you passionate about our program?
                        Become one of the first people to be alerted about
                        our events, tournaments, STEM sessions, and new store
                        arrivals through your email.
                    </p>
                    <div className="right-bottom mt-4">
                        <Button
                            onClick={() => window.location.href = "/forms"}
                            title={"More info"}
                        />
                    </div>
                </section>
                <section className="left mt-5">
                    <Form form={form} layout="vertical" style={{ justifyContent: "center" }}>
                        <div className="inputs">
                            <Form.Item className='col-6' label="Full Name" required tooltip="This is a required field">
                                <Input style={{ width: 300 }} id='fullName' onChange={(e) => onChange({ id: "fullName", value: e.target.value })} placeholder="Full Name" />
                            </Form.Item>
                            <Form.Item className='col-6' label="Email" required tooltip="This is a required field">
                                <Input style={{ width: 300 }} id='email' onChange={(e) => onChange({ id: "email", value: e.target.value })} placeholder="Email" />
                            </Form.Item>

                            <div className="input-group" style={{ justifyContent: "space-between", width: 300 }}>
                                <div>
                                    <label style={{ textAlign: "center" }} htmlFor="jobRole">Job Role</label>
                                    <Dropdown menu={{ items, onClick: ({ key }) => onDropdown(key, "jobRole") }} overlayStyle={{ width: 200 }} className='hover mb-3' trigger={['hover']} arrow placement="bottom">
                                        <div className="hover jobRole">
                                            <span>
                                                {jobRole}
                                            </span>
                                            <DownOutlined />
                                        </div>
                                    </Dropdown>
                                </div>
                                <div>
                                    <label htmlFor="jobRole">Solution Interest</label>
                                    <Dropdown menu={{ items, onClick: ({ key }) => onDropdown(key, "solutionInterest") }} overlayStyle={{ width: 200 }} className='hover mb-3' trigger={['hover']} arrow placement="bottom">
                                        <div style={{ marginLeft: 15 }} className="hover jobRole">
                                            <span>
                                                {solutionInterest}
                                            </span>
                                            <DownOutlined />
                                        </div>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3" style={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                onClick={() => window.location.href = "/forms"}
                                width={220}
                                title={"Submit"}
                            />
                        </div>
                    </Form>
                </section>
            </div>
        </div>
    )
}

export default Newsletters
