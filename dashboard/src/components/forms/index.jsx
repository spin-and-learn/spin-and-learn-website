import React, { useContext } from 'react'
import { Card } from "antd"
import FormsModal from './Modal'
import { MainContext } from '../../contexts/MainContext'

const Index = ({ data }) => {

    const {
        setSudentId,
        setId,
        setForm,
        setSchool,
        setGrade,
        setAttendance,
        setBehavior,
        setExcellentGrade,
        setTeacherComment,
        setParentComment,
        setFirstName,
        setLastName,
        setTeacherSign,
        setParentSign,
        setTeacherEmail,
        setParentEmail,
        setModalVivility,
        setPeriodEnd,
        setPeriodStart
    } = useContext(MainContext)

    const onClick = (form) => {
        const { id, studentId, attendance, periodStart, periodEnd, student, behavior, teacherSign, excellentGrade, parentComment, teacherComment, teacherEmail, parentEmail, parentSign } = form

        setForm(form)
        setId(id)
        setSudentId(studentId)
        setPeriodStart(periodStart)
        setPeriodEnd(periodEnd)

        setSchool(student.school)
        setFirstName(student.firstName)
        setLastName(student.lastName)
        setGrade(student.grade)

        setAttendance(attendance)
        setExcellentGrade(excellentGrade)
        setBehavior(behavior)

        setTeacherEmail(teacherEmail)
        setParentEmail(parentEmail)

        setTeacherSign(teacherSign)
        setParentSign(parentSign)

        setParentComment(parentComment)
        setTeacherComment(teacherComment)

        setModalVivility(true)
    }

    const handleStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "#389e0d"
            case "warning":
                return "orange"
            default:
                return "red"
        }
    }

    return (
        <div className='Forms'>
            {data.map((form, key) => (
                <Card onClick={() => onClick(form)} key={key + "form"} className="form hover active">
                    <div className="icon">
                        <span style={{ color: handleStatusColor(form.status) }} className="material-symbols-outlined">assignment</span>
                    </div>
                    <div className="info">
                        <b style={{ textTransform: "uppercase" }}>{form?.student?.school}</b>
                        <b>{form?.student?.firstName} {form?.student?.lastName}</b>
                    </div>
                </Card>
            ))}
            <FormsModal />
        </div>
    )
}

export default Index
