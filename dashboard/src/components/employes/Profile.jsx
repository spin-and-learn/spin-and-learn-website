import React, { useState, useRef, useEffect } from 'react'
import { Button, Card, Input, Space } from 'antd'
import Table from '../layout/Table'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import moment from 'moment'
import ClockingModal from "../modals/Clockings"

const Profile = () => {
    const params = useParams()
    const [editingKey, setEditingKey] = useState('')
    const searchInput = useRef(null)
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [clockings, setClockings] = useState([])
    const [employee, setEmployee] = useState({})
    const [data, setData] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const [missingClock, setMissingClock] = useState(true)

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            })
                            setSearchText(selectedKeys[0])
                            setSearchedColumn(dataIndex)
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close()
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100)
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    })

    const RenderClocks = ({ clocks, day }) => {
        const days = ["sunday", "monday", "tuesday", "wednesday", "thurday", "friday", "saturday"]
        const date = new Date()
        const dayIndex = date.getDay()


        const nextDate = (key) => clocks.length >= 1 && clocks[key + 1] ? moment(clocks[key + 1]).format("LT") : ""
        const missingClocks = (key) => {
            //  && day !== days[dayIndex] && clocks.length > 1
            if (key === clocks.length - 1 && day !== days[dayIndex]) {
                return true
            } else {
                return false
            }
        }

        return (
            <div>
                {clocks.map((clock, key) => (
                    <div key={`clock-${key}`}>
                        <small>
                            {key % 2 === 0 &&
                                moment(clocks[key]).format("LT") + " - " + nextDate(key)
                            }
                        </small>
                    </div>
                ))}
            </div>
        )
    }

    const calculateDayHours = (clocks) => {
        const result = moment.duration()
        let i = 0
        while (i < clocks.length) {
            const start = moment(clocks[i])
            const end = moment(clocks[i + 1])

            if (clocks[i] && clocks[i + 1]) {
                const diff = end.diff(start)
                const hours = moment.utc(diff).format("HH:mm:ss")
                result.add(moment.duration(hours))
            }

            i = i + 2
        }

        return result.asHours().toFixed(2)
    }

    const calculateAllHours = (rows) => {
        let total = 0
        for (const row in rows) {
            if (Object.hasOwnProperty.call(rows, row)) {

                switch (row) {
                    case "sunday":
                        total += parseFloat(calculateDayHours(rows[row]))
                        break;
                    case "monday":
                        total += parseFloat(calculateDayHours(rows[row]))
                        break;
                    case "tuesday":
                        total += parseFloat(calculateDayHours(rows[row]))
                        break;
                    case "wednesday":
                        total += parseFloat(calculateDayHours(rows[row]))
                        break;
                    case "thurday":
                        total += parseFloat(calculateDayHours(rows[row]))
                        break;
                    case "friday":
                        total += parseFloat(calculateDayHours(rows[row]))
                        break;
                    case "saturday":
                        total += parseFloat(calculateDayHours(rows[row]))
                        break;
                }

            }
        }

        return parseFloat(total).toFixed(2)
    }

    const handleAdd = (row) => {
        setData(row)
        setOpenModal(true)
    }

    const RenderColumn = ({ day, text, row }) => {
        const days = ["sunday", "monday", "tuesday", "wednesday", "thurday", "friday", "saturday"]
        const date = new Date()
        const dayIndex = date.getDay()

        return (
            <div onClick={() => handleAdd({ data: text, day, period: row.period, id: row.id })}>
                {
                    text?.length >= 1 ?
                        <div className='row-clock hover active' style={{ borderColor: days[dayIndex] !== day.toLowerCase() && text?.length % 2 === 1 ? "red" : "#55ce63" }}>
                            <RenderClocks clocks={text} length={text.length} day={day.toLowerCase()} />
                            <small>( {calculateDayHours(text)} hours )</small>
                        </div>
                        :
                        <div className='row-clock' style={{ borderColor: "white" }}>
                            <div>
                                <span className="material-symbols-outlined hover active add-clock" style={{ padding: 10 }}>add</span>
                            </div>
                        </div>
                }
            </div>
        )
    }

    const columns = [
        {
            key: 3,
            title: 'Period',
            dataIndex: 'period',
            width: "5%",
            ...getColumnSearchProps('period'),
            render: (text, row) => (
                <span>{text}</span>
            )
        },
        {
            key: "employee-week-1",
            title: "Sunday",
            dataIndex: 'sunday',
            width: "10%",
            render: (text, row) => RenderColumn({ text, row, day: "Sunday" })
        },
        {
            key: "employee-week-1",
            title: "Monday",
            dataIndex: 'monday',
            width: "12%",
            render: (text, row) => RenderColumn({ text, row, day: "Monday" })
        },
        {
            key: "employee-week-1",
            title: "Tuesday",
            dataIndex: 'tuesday',
            width: "10%",
            render: (text, row) => RenderColumn({ text, row, day: "Tuesday" })
        },
        {
            key: "employee-week-1",
            title: "Wednesday",
            dataIndex: 'wednesday',
            width: "10%",
            render: (text, row) => RenderColumn({ text, row, day: "Wednesday" })
        },
        {
            key: "employee-week-1",
            title: "Thursday",
            dataIndex: 'thursday',
            width: "10%",
            render: (text, row) => RenderColumn({ text, row, day: "Thursday" })
        },
        {
            key: "employee-week-1",
            title: "Friday",
            dataIndex: 'friday',
            width: "10%",
            render: (text, row) => RenderColumn({ text, row, day: "Friday" })
        },
        {
            key: "employee-week-1",
            title: "Saturday",
            dataIndex: 'saturday',
            width: "12%",
            render: (text, row) => RenderColumn({ text, row, day: "Saturday" })
        },
        {
            key: "employee-week-1",
            title: "Hours",
            dataIndex: 'hours',
            width: "5%",
            render: (text, row) => (
                <div>
                    {calculateAllHours(row)}
                </div>
            )
        }
    ]

    const isEditing = (record) => record.key === editingKey

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        }
    })

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters) => {
        clearFilters()
        setSearchText('')
    }

    const fetchProfile = async () => {
        await axios.get(`/employees/${params.employeeId}`).then(res => {
            setEmployee(res.data.employees)
            setClockings(res.data.employees?.clockings)
        })
    }

    const formatPhoneNumber = (phoneNumberString) => {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            var intlCode = (match[1] ? '+1 ' : '');
            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return null;
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <div>
            <Card className='EmployeeProfile'>
                <div style={{ display: "flex" }}>
                    <div className="profile-img">
                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" alt="" srcSet="" />
                    </div>
                    <div className='ps-3 info' style={{ paddingTop: 10 }}>
                        <div style={{ width: "50%" }}>
                            <div>
                                <b>{employee.firstName} {employee.lastName}</b>
                                <p style={{ margin: 0 }}>{employee.role}</p>
                            </div>

                            <div style={{ background: employee.status === "active" ? "#55ce63" : "red" }} className='status-button mt-3'>
                                <span>{employee.status}</span>
                            </div>
                        </div>

                        <div style={{ width: "50%", fontWeight: "bold" }}>
                            <p>Phone: <span>{formatPhoneNumber(employee.phone)}</span></p>
                            <p>Email: <span style={{ textTransform: "lowercase" }}>{employee.email}</span></p>
                            <p>Birthday: <span>{moment(employee.dob).format("ll")}</span></p>
                            <p>Address: <span>{employee.address}</span></p>
                            <p>Gender: <span>{employee.gender}</span></p>
                        </div>
                    </div>
                </div>
            </Card>
            <div className='row table-scroll' style={{ paddingLeft: 15, paddingRight: 15, scrollBehavior: "smooth" }}>
                <Card className='mt-2 table-scroll'>
                    <Table columns={mergedColumns} data={clockings} />
                </Card>
            </div>
            <ClockingModal data={data} setData={setData} fetchProfile={fetchProfile} openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Profile
