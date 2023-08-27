import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Forms from "../components/forms"
import { students } from '../mocks';
import { Card, DatePicker, Radio, Popover, Button, Empty } from "antd"
import Title from "antd/lib/typography/Title"
import moment from 'moment';
import Paragraph from "antd/lib/typography/Paragraph"


const FormsScreen = () => {
    const [pickerRange, setPickerRange] = useState([
        // moment("2021").format("YYYY"), 
        // moment("2022").format("YYYY") 
    ])
    const [openSchool, setOpenSchool] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)
    const [filter, setFilter] = useState([])
    const [forms, setForms] = useState([])

    const fetchPeriods = async ({ start, end, current }) => {
        const filter = current ? "current=true" : `start=${start}&end=${end}&current=false`
        await axios.get(`/periods/forms?${filter}`).then((res) => {
            setForms(res.data?.data?.forms || [])
            setFilter(res.data?.data?.forms || [])

            const start = res.data?.data?.start
            const end = res.data?.data?.end
            setPickerRange([moment(start), moment(end)])
        })
    }

    const onChange = (range) => {
        setPickerRange(range)
        const filter = {
            current: false,
            start: moment(range[0]).format("YYYY"),
            end: moment(range[1]).format("YYYY"),
        }
        fetchPeriods(filter)
    }

    const handleOnChangeSchool = (e) => {

        if (e.target.value === "all") {
            setFilter(forms)
        } else {
            const filteredForm = forms.filter((value) => {
                return value.student.school === e.target.value
            })
            setFilter(filteredForm)
        }
        setOpenSchool(false)
    }

    const handleOnChange = (e) => {
        if (e.target.value === "all") {
            setFilter(forms)
        } else {
            const filteredForm = forms.filter((value) => {
                return value.status === e.target.value
            })
            setFilter(filteredForm)
        }
        setOpenFilter(false)
    }

    const ContentSchoolFilter = (
        <div className="ant-filtertabs">
            <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                <Radio.Group style={{ display: "flex", flexDirection: "column", width: 150 }} onChange={handleOnChangeSchool} defaultValue="all">
                    <Radio value="all">ALL</Radio>
                    <Radio value="ps1">PS1</Radio>
                    <Radio value="ps3">PS3</Radio>
                    <Radio value="ps29">PS29</Radio>
                    <Radio value="ps30">PS30</Radio>
                    <Radio value="ps5">PS5</Radio>
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
                    <Radio value="pending">PENDING</Radio>
                </Radio.Group>
            </div>
        </div>
    )

    useEffect(() => {
        fetchPeriods({ current: true })
    }, [])

    return (
        <div className="FormsScreen">
            <div className='FormsHeader'>
                <Card>
                    <div className="project-ant">
                        <div>
                            <div className="d-flex">
                                <Title level={5}>Period:</Title>
                                <DatePicker.RangePicker
                                    bordered={false}
                                    format={"YYYY"}
                                    value={pickerRange}
                                    onChange={onChange}
                                    picker="year"
                                    style={{
                                        border: "none",
                                        fontWeight: "bold",
                                        color: "red",
                                        width: 200,
                                        outline: "none"
                                    }}
                                />
                            </div>
                            <Paragraph className="lastweek">{filter.length} Form{filter.length > 0 ? "s" : ""}</Paragraph>
                        </div>
                        <div>
                            <Popover open={openSchool} onOpenChange={(newOpen) => setOpenSchool(newOpen)} bordered placement="bottom" content={ContentSchoolFilter} trigger="click">
                                <Button style={{ width: 100, marginRight: 10 }}>Schools</Button>
                            </Popover>
                            <Popover open={openFilter} onOpenChange={(newOpen) => setOpenFilter(newOpen)} placement="bottom" content={ContentStatusFilter} trigger="click">
                                <Button style={{ width: 100 }}>Filter</Button>
                            </Popover>
                        </div>
                    </div>
                </Card>
            </div>
            {filter.length > 0 ?
                <Forms data={filter || []} />
                :
                <Empty style={{ marginTop: 100 }} />
            }
        </div>
    )
}

export default FormsScreen