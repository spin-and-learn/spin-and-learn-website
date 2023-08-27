import React, { useContext, useEffect, useState } from 'react'
import { Form, Input, DatePicker, Checkbox, Button, notification } from 'antd'
import { MainContext } from '../../contexts/MainContext'
import Title from "antd/lib/typography/Title"
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { fetchForms } from '../../redux/apiFetchs'
import axios from 'axios'

const FormInputs = () => {
    const {
        id,
        setForm,
        attendance,
        periodStart,
        periodEnd,
        sudentId,
        teacherEmail,
        parentEmail,
        setTeacherEmail,
        setParentEmail,
        teacherSign,
        parentSign,
        firstName,
        lastName,
        school,
        grade,
        teacherComment,
        parentComment,
        form,
        behavior,
        excellentGrade,
        setAttendance,
        setBehavior,
        setExcellentGrade,
        setFirstName,
        setLastName,
        setSchool,
        setGrade,
        setTeacherComment,
        setParentComment,
        setIsUpdatingForm,
        setPeriodEnd,
        setPeriodStart,
    } = useContext(MainContext)
    const [componentDisabled, setComponentDisabled] = useState(true)

    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled)
    }

    const handleOnCkeckbox = (e) => {
        console.log(e.target.checked)
        const checked = e.target.checked

        if (e.target.id === "attendance") {
            setAttendance(checked)

        } else if (e.target.id === "excellentGrades") {
            setExcellentGrade(checked)

        } else if (e.target.id === "behavior") {
            setBehavior(checked)
        }
    }

    const handleOnChange = (e) => {
        switch (e.target.id) {
            case "firstName":
                setFirstName(e.target.value)
                break;
            case "lastName":
                setLastName(e.target.value)
                break;
            case "attendance":
                setAttendance(e.target.checked)
                break;
            case "excellentGrades":
                setExcellentGrade(e.target.checked)
                break;
            case "behavior":
                setBehavior(e.target.checked)
                break;
            case "school":
                setSchool(e.target.value)
                break;
            case "grade":
                setGrade(e.target.value)
                break;
            case "teacherEmail":
                setTeacherEmail(e.target.value)
                console.log(teacherEmail);
                break;
            case "parentEmail":
                setParentEmail(e.target.value)
                console.log(parentEmail);
                break;
            case "teacherComment":
                setTeacherComment(e.target.value)
                break;
            case "parentComment":
                setParentComment(e.target.value)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log({
            start: moment("2020-01").format("YYYY-MM")
        })
    }, [])

    return (
        <div className="FormInputs">
            <Form style={{ marginTop: 30 }} layout="horizontal" onValuesChange={onFormLayoutChange} disabled={false}>
                <section className='mb-3'>
                    <Form.Item label="School" name="disabled" valuePropName="checked">
                        <Input className={"input-edit"} onChange={handleOnChange} style={{ textTransform: "uppercase" }} value={school} id='school' />
                    </Form.Item>
                    <Form.Item label="First Name" name="disabled" valuePropName="checked">
                        <Input className={"input-edit"} onChange={handleOnChange} value={`${firstName}`} id='firstName' />
                    </Form.Item>
                    <Form.Item label="Last Name" name="disabled" valuePropName="checked">
                        <Input className={"input-edit"} onChange={handleOnChange} value={`${lastName}`} id='lastName' />
                    </Form.Item>
                    <Form.Item label="Grade" name="disabled" valuePropName="checked">
                        <Input className={"input-edit"} onChange={handleOnChange} value={grade} id='grade' />
                    </Form.Item>
                </section>
                <hr />
                <section className='mb-3'>
                    <Form.Item valuePropName="checked">
                        <div className='mt-2' style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "flex-end", alignItems: "center" }}>
                            <div className="row ms-1 mt-1" style={{ display: "flex", alignItems: "center" }}>
                                <label htmlFor="attendance">School Attendance</label>
                                <span className='grade-higher'>90% or Higher</span>
                            </div>
                            <Checkbox onClick={handleOnCkeckbox} checked={attendance} autoFocus={false} id='attendance'></Checkbox>
                        </div>
                    </Form.Item>
                    <Form.Item valuePropName="checked">
                        <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "flex-end", alignItems: "center" }}>
                            <div className="row ms-1 mt-1" style={{ display: "flex", alignItems: "center" }}>
                                <label htmlFor="attendance">Excellent Grades</label>
                            </div>
                            <Checkbox onClick={handleOnCkeckbox} checked={excellentGrade} autoFocus={false} id='excellentGrades'></Checkbox>
                        </div>
                    </Form.Item>
                    <Form.Item valuePropName="checked">
                        <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "flex-end", alignItems: "center" }}>
                            <div className="row ms-1 mt-1" style={{ display: "flex", alignItems: "center" }}>
                                <label htmlFor="attendance">Excellent Behavior</label>
                            </div>
                            <Checkbox onClick={handleOnCkeckbox} checked={behavior} autoFocus={false} id='behavior'></Checkbox>
                        </div>
                    </Form.Item>
                </section>
                <hr />
                <section className='mt-4'>
                    <Form.Item className='mb-3' label="Teacher Email" name="disabled" valuePropName="checked">
                        <Input className={"input-edit"} onChange={handleOnChange} style={{ textTransform: "lowercase" }} value={teacherEmail} id='teacherEmail' />
                    </Form.Item>
                    <Form.Item label="Parent Email" name="disabled" valuePropName="checked">
                        <Input className={"input-edit"} onChange={handleOnChange} style={{ textTransform: "lowercase" }} value={parentEmail} id='parentEmail' />
                    </Form.Item>
                </section>
                <section className='mb-3'>
                    <Form.Item >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div className='signatures mt-3'>
                                    <img src={teacherSign} alt="teacherSign" />
                                </div>
                                <span style={{ fontWeight: "bold" }}>Teacher signatures</span>
                            </div>
                            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div className='signatures mt-3'>
                                    <img src={parentSign} alt="parentSign" />
                                </div>
                                <span style={{ fontWeight: "bold" }}>Parent signatures</span>
                            </div>
                        </div>
                    </Form.Item>
                </section>
                <hr />
                <section className=''>
                    <Form.Item>
                        <label className='mt-3' htmlFor="teacherComment">Teacher Comments</label>
                        <Input.TextArea value={teacherComment} onChange={handleOnChange} id='teacherComment' style={{ height: 200 }} />
                    </Form.Item>
                    <Form.Item>
                        <label htmlFor="parentComment">Teacher Comments</label>
                        <Input.TextArea value={parentComment} onChange={handleOnChange} id='parentComment' style={{ height: 200 }} />
                    </Form.Item>
                </section>
            </Form>
        </div>
    )
}
export default FormInputs


// { 
//     "firstName": "Aayden",
//     "lastName": "Williams",
//     "grade": "8",
//     "school": "ps3",
//     "gender": "m",
//     "race": "black or african american",
//     "uuid": "ps3-aayden-williams",
//     "status": "active"
// },