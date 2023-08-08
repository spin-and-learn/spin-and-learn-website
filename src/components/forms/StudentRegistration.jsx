import React, { useEffect, useState } from 'react'
import { Card, Input, Form, Radio, Space, DatePicker, Button, Result } from "antd"
import $ from "jquery"
import axios from 'axios'
import { Link } from "react-router-dom";
import logo from '../../assets/img/logohorizontal.png';

const StudentRegistration = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [grade, setGrade] = useState("")
    const [school, setSchool] = useState("")
    const [progress, setProgress] = useState("")
    const [gender, setGender] = useState("")
    const [joinedDate, setJoinedDate] = useState("")
    const [selfDescription, setSelfDescription] = useState("")
    const [success, setSuccess] = useState(false)

    const HandleonSubmit = async () => {
        if (!firstName || !lastName || !gender || !school || !progress || !joinedDate || !selfDescription) {
            handleInputError("This field is required")
            return
        }
        await axios.post("/students/forms", {
            firstName,
            lastName,
            gender,
            school,
            progress,
            joinedDate,
            selfDescription,
            periodId: 1
        }).then((res) => {
            setSuccess(true)
            console.log(res.data)
        })

        setTimeout(() => {
            handleInputError("")
        }, 3000)
    }

    const handleInputError = (message) => {
        $("#firstNameError").html(!firstName ? message : "")
        $("#lastNameError").html(!lastName ? message : "")
        $("#gradeError").html(!grade ? message : "")
        $("#schoolError").html(!school ? message : "")
        $("#programError").html(!progress ? message : "")
        $("#genderError").html(!gender ? message : "")
        $("#dateError").html(!joinedDate ? message : "")
        $("#describeError").html(!selfDescription ? message : "")
    }

    const SuccessComponent = () => (
        <Card>
            <Result
                status="success"
                title="Form Successfully Created"
                extra={[
                    <Button onClick={() => window.location.reload()} key="primary">New Form</Button>
                ]}
            />
        </Card>
    )

    return (
        <div className='StudentRegistration' style={{ height: success && "81vh" }}>
            <div>
                {!success ?
                    <Form id='forms' layout="vertical" >
                        <Card className='mb-2'>
                            <Link className="navbar-brand whiteTextBold" to="/">
                                <div className='logo-container'>
                                    <img style={{ width: 200 }} src={logo} alt="Spin and Learn logo" className="logo"></img>
                                </div>
                            </Link>
                        </Card>
                        <section>
                            <Card className='mb-2'>
                                <Form.Item label={<label>First Name <span style={{ color: "red" }}>*</span></label>}>
                                    <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id='firstName' placeholder="Your Answer" required />
                                </Form.Item>
                                <span className="span-error" id='firstNameError'></span>
                            </Card>
                            <Card className='mb-2'>
                                <Form.Item label={<label>Last Name <span style={{ color: "red" }}>*</span></label>}>
                                    <Input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id='lastName' placeholder="Your Answer" required />
                                </Form.Item>
                                <span className="span-error" id='lastNameError'></span>
                            </Card>
                            <Card className='mb-2'>
                                <Form.Item label={<label>Grade <span style={{ color: "red" }}>*</span></label>}>
                                    <Input value={grade} onChange={(e) => setGrade(e.target.value)} type="text" id='grade' placeholder="Your Answer" required />
                                </Form.Item>
                                <span className="span-error" id='gradeError'></span>
                            </Card>
                        </section>
                        <section>
                            <Card className='mb-2'>
                                <Form.Item label={<label>Which school do you go to? <span style={{ color: "red" }}>*</span></label>}>
                                    <Radio.Group onChange={(e) => setSchool(e.target.value)} value={school}>
                                        <Space direction="vertical">
                                            <Radio value={"PS1"}>PS1</Radio>
                                            <Radio value={"PS3"}>PS3</Radio>
                                            <Radio value={"PS05"}>PS05</Radio>
                                            <Radio value={"PS/MS29"}>PS/MS29</Radio>
                                            <Radio value={"PS30"}>PS30</Radio>
                                            <Radio value={"PS65"}>PS65</Radio>
                                            <Radio value={"MS390"}>MS390</Radio>
                                        </Space>
                                    </Radio.Group>
                                </Form.Item>
                                <span className="span-error" id='schoolError'></span>
                            </Card>
                            <Card className='mb-2'>
                                <Form.Item label={<label>How long have you been coming this program? <span style={{ color: "red" }}>*</span></label>}>
                                    <Radio.Group onChange={(e) => setProgress(e.target.value)} value={progress}>
                                        <Space direction="vertical">
                                            <Radio value={"fist-day"}>This is my FIRST day</Radio>
                                            <Radio value={"few-days"}>A few days</Radio>
                                            <Radio value={"few-weeks"}>A few weeks</Radio>
                                            <Radio value={"one-year"}>1 year</Radio>
                                            <Radio value={"two-years"}>2 years</Radio>
                                            <Radio value={"Other"}>
                                                Other:
                                                {progress === "Other" ? (
                                                    <Input
                                                        style={{
                                                            width: 300,
                                                            marginLeft: 10,
                                                        }}
                                                    />
                                                ) : null}
                                            </Radio>

                                        </Space>
                                    </Radio.Group>
                                </Form.Item>
                                <span className="span-error" id='programError'></span>
                            </Card>
                            <Card className='mb-2'>
                                <Form.Item label={<label>What is your gender? <span style={{ color: "red" }}>*</span></label>}>
                                    <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                                        <Space direction="vertical">
                                            <Radio value={"female"}>Female</Radio>
                                            <Radio value={"male"}>Male</Radio>
                                            <Radio value={"not-answered"}>I don't want to answer</Radio>
                                            <Radio value={"Other"}>
                                                Other:
                                                {gender === "Other" ? (
                                                    <Input
                                                        style={{
                                                            width: 300,
                                                            marginLeft: 10,
                                                        }}
                                                    />
                                                ) : null}
                                            </Radio>

                                        </Space>
                                    </Radio.Group>
                                </Form.Item>
                                <span className="span-error" id='genderError'></span>
                            </Card>
                        </section>
                        <section>
                            <Card className='mb-2 '>
                                <Form.Item onChange={(e) => setJoinedDate(e.target.value)} value={joinedDate} label={<label>Date you join the program? <span style={{ color: "red" }}>*</span></label>}>
                                    <Space direction="vertical" size={12}>
                                        <DatePicker
                                            onChange={(date) => setJoinedDate(date)}
                                            value={joinedDate}
                                            className='mt-2'
                                            dateRender={(current) => {
                                                return (
                                                    <div className="ant-picker-cell-inner">
                                                        {current.date()}
                                                    </div>
                                                )
                                            }}
                                        />
                                    </Space>
                                </Form.Item>
                                <span className="span-error" id='dateError'></span>
                            </Card>
                        </section>
                        <section>
                            <Card className='mb-2'>
                                <Form.Item label={<label>How would you describe yourself? <span style={{ color: "red" }}>*</span></label>}>
                                    <Radio.Group onChange={(e) => setSelfDescription(e.target.value)} value={selfDescription}>
                                        <Space direction="vertical">
                                            <Radio value={"American Indian, Indigenous, Native American, or Alaskan Native"}>American Indian, Indigenous, Native American, or Alaskan Native</Radio>
                                            <Radio value={"Asian (including South Asian/Indian)"}>Asian (including South Asian/Indian)</Radio>
                                            <Radio value={"Black or African American"}>Black or African American</Radio>
                                            <Radio value={"Hispanic or Latina(o)(x)"}>Hispanic or Latina(o)(x)</Radio>
                                            <Radio value={"Middle Eastern or North African"}>Middle Eastern or North African</Radio>
                                            <Radio value={"Native Hawaiian or Other Pacific Islander"}>Native Hawaiian or Other Pacific Islander</Radio>
                                            <Radio value={"White"}>White</Radio>
                                            <Radio value={"Some other race, ethnicity or origin"}>Some other race, ethnicity or origin</Radio>
                                            <Radio value={"I don't want to answer"}>I don't want to answer</Radio>
                                        </Space>
                                    </Radio.Group>
                                </Form.Item>
                                <span className="span-error" id='describeError'></span>
                            </Card>
                        </section>
                        <Form.Item disabled className='submit-container mt-3'>
                            <button className={'bg-hover'} onClick={HandleonSubmit}>
                                Submit
                            </button>
                        </Form.Item>
                    </Form> :
                    <SuccessComponent />
                }
            </div>
        </div>
    )
}

export default StudentRegistration
