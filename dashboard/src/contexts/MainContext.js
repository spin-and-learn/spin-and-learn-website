import { createContext, useState } from "react"

export const MainContext = createContext()


const MainProvider = ({ children }) => {
    const [attendance, setAttendance] = useState(false)
    const [form, setForm] = useState({})
    const [modalVivility, setModalVivility] = useState(false)
    const [isUpdatinForm, setIsUpdatingForm] = useState(false)
    const [behavior, setBehavior] = useState(false)
    const [excellentGrade, setExcellentGrade] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [id, setId] = useState(null)
    const [sudentId, setSudentId] = useState(null)
    const [lastName, setLastName] = useState("")
    const [school, setSchool] = useState("")
    const [grade, setGrade] = useState("")
    const [teacherComment, setTeacherComment] = useState("")
    const [parentComment, setParentComment] = useState("")
    const [teacherSign, setTeacherSign] = useState("")
    const [parentSign, setParentSign] = useState("")
    const [parentEmail, setParentEmail] = useState("")
    const [teacherEmail, setTeacherEmail] = useState("")
    const [periodStart, setPeriodStart] = useState("")
    const [periodEnd, setPeriodEnd] = useState("")


    const data = {
        attendance,
        firstName,
        lastName,
        school,
        grade,
        teacherComment,
        parentComment,
        form,
        behavior,
        excellentGrade,
        teacherSign,
        parentSign,
        parentEmail,
        teacherEmail,
        id,
        modalVivility,
        isUpdatinForm,
        sudentId,
        periodStart,
        periodEnd,
        setPeriodEnd,
        setPeriodStart,
        setSudentId,
        setIsUpdatingForm,
        setModalVivility,
        setId,
        setTeacherEmail,
        setParentEmail,
        setForm,
        setAttendance,
        setBehavior,
        setExcellentGrade,
        setFirstName,
        setLastName,
        setSchool,
        setGrade,
        setTeacherComment,
        setParentComment,
        setTeacherSign,
        setParentSign
    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}


export default MainProvider