import React, { useState } from 'react'
import { Card, DatePicker, Radio, Popover, Button } from "antd"
import Title from "antd/lib/typography/Title"
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { fetchPeriods } from '../../redux/apiFetchs'

const FormsHeader = ({ students }) => {
    const dispatch = useDispatch()
    const [pickerRange, setPickerRange] = useState([])
    const [data, setData] = useState(students())
    const [studentData] = useState(students())
    const [openSchool, setOpenSchool] = useState(false)


    const onChange = (range) => {
        setPickerRange(range)

        dispatch(fetchPeriods({ filter: `periods=${moment(range[0]).format("YYYY-MM")},${moment(range[1]).format("YYYY-MM")}` }))
    }

    const handleOnChangeSchool = (e) => {
        setOpenSchool(false)
    }

    const handleOnChange = (e) => {
        alert(true)
        switch (e.target.value) {
            case "completed":
                setData(studentData.filter((value) => value.status === "completed"))
                break
            case "error":
                setData(studentData.filter((value) => value.status === "error"))
                break
            case "warning":
                setData(studentData.filter((value) => value.status === "warning"))
                break
            default:
                setData(studentData)
                break
        }
    }

    const ContentSchoolFilter = (
        <div className="ant-filtertabs">
            <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                <Radio.Group style={{ display: "flex", flexDirection: "column", width: 150 }} onChange={handleOnChangeSchool} defaultValue="all">
                    <Radio value="all">ALL</Radio>
                    <Radio value="ps1">PS1</Radio>
                    <Radio value="ps2">PS2</Radio>
                    <Radio value="ps3">PS3</Radio>
                </Radio.Group>
            </div>
        </div>
    )

    const ContentStatusFilter = (
        <div className="ant-filtertabs">
            <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                <Radio.Group style={{ display: "flex", flexDirection: "column" }} onChange={handleOnChange} defaultValue="all">
                    <Radio value="all">ALL</Radio>
                    <Radio value="completed">COMPLETED</Radio>
                    <Radio value="warning">WARNING</Radio>
                    <Radio value="error">ERROR</Radio>
                </Radio.Group>
            </div>
        </div>
    )

    return (
        <div className='FormsHeader'>
            <Card>
                <div className="project-ant">
                    <div>
                        <div className="d-flex">
                            <Title level={5}>Period:</Title>
                            <DatePicker.RangePicker
                                bordered={false}
                                format={"MMM-YYYY"}
                                value={pickerRange}
                                onChange={onChange}
                                picker="month"
                                style={{
                                    border: "none",
                                    fontWeight: "bold",
                                    color: "red",
                                    width: 200,
                                    outline: "none"
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <Popover open={openSchool} onOpenChange={(newOpen) => setOpenSchool(newOpen)} bordered placement="bottom" content={ContentSchoolFilter} trigger="click">
                            <Button style={{ width: 100, marginRight: 10 }}>Schools</Button>
                        </Popover>
                        <Popover placement="bottom" content={ContentStatusFilter} trigger="click">
                            <Button style={{ width: 100 }}>Filter</Button>
                        </Popover>
                    </div>
                </div>

            </Card>
        </div>
    )
}

export default FormsHeader
