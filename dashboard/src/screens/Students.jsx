import React, { useState, useRef, useEffect } from "react"
import { Card, Col, Row, Radio, Popover, Form, InputNumber, Popconfirm, Typography, Input, Tag, Space, Button, DatePicker } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import Paragraph from "antd/lib/typography/Paragraph"
import Title from "antd/lib/typography/Title"
import Table from "../components/layout/Table"
import { students } from "../mocks"
import moment from "moment"
import axios from "axios"

const studentData = students()

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    )
}

const Students = () => {
    const [form] = Form.useForm()
    const [data, setData] = useState(studentData)
    const [editingKey, setEditingKey] = useState('')
    const [pickerRange, setPickerRange] = useState([moment("2020-02"), moment("2020-05")])
    const [filter, setFilter] = useState([])
    const [students, setStudents] = useState([])
    const [openSchool, setOpenSchool] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)


    const isEditing = (record) => record.key === editingKey

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef(null)

    const handleChange = (pagination, filters, sorter) => {

    }

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters) => {
        clearFilters()
        setSearchText('')
    }

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

   
    const cancel = () => {
        setEditingKey('')
    }

    const columns = [
        {
            key: 0,
            title: "#",
            dataIndex: 'id',
            width: '5%'
        },
        {
            key: 1,
            title: 'First Name',
            dataIndex: 'firstName',
            width: '20%',
            editable: true,
            render: (text, row) => {
                return <a className="hover-ul" style={{ color: "black", textTransform: "capitalize" }} href={`/students/${row.uuid}`}>{text}</a>
            }
        },
        {
            key: 2,
            title: 'Last Name',
            dataIndex: 'lastName',
            width: '20%',
            editable: true,
            render: (text, row) => {
                return <a className="hover-ul" style={{ color: "black", textTransform: "capitalize" }} href={`/students/${row.uuid}`}>{text}</a>
            }
        },
        {
            key: 3,
            title: 'Student ID',
            dataIndex: 'uuid',
            width: '20%',
            ...getColumnSearchProps('uuid'),
            render: (text, row) => {
                return <a className="hover-ul" style={{ color: "black" }} href={`/students/${row.uuid}`}>{text}</a>
            }
        },
        {
            key: 5,
            title: 'School',
            dataIndex: 'school',
            width: '10%',
            editable: true
        },
        {
            key: 6,
            title: 'Status',
            dataIndex: 'status',
            width: '10%',
            editable: true,
            render: (text) => {
                const color = text === "active" ? "green" : text === "inactive" ? "orange" : "red"
                return (
                    <Tag color={color}>
                        {text.toUpperCase()}
                    </Tag>
                )
            }
        },
        {
            key: 7,
            title: 'Grade',
            dataIndex: 'grade',
            width: '10%',
            editable: true,
        },
        // {
        // key: 8,
        // title: () => <span className="material-symbols-outlined">more_vert</span>,
        // width: "5%",
        // dataIndex: 'operation',
        // render: (_, record) => {
        // const editable = isEditing(record)
        // return editable ? (
        // <span>
        // <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
        // Save
        // </Typography.Link>
        // <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
        // <span className="hover active" style={{ color: "red" }}>Cancel</span>
        // </Popconfirm> 
        // </span>
        // ) : (
        // <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
        // Edit
        // </Typography.Link>
        // )
        // }
        // }
    ]

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

    const handleOnChange = (e) => {
        if (e.target.value === "all") {
            setFilter(students)
        } else {
            const filteredForm = students.filter((value) => {
                return value.status === e.target.value
            })
            setFilter(filteredForm)
        }
    }

    const fetchPeriods = async (filter) => {
        await axios.get(`/periods?${filter}`).then((res) => {
            setStudents(res.data?.data?.students || [])
            setFilter(res.data?.data?.students || [])

            const start = res.data?.data?.start
            const end = res.data?.data?.end
            setPickerRange([moment(start), moment(end)])
        })
    }

    const handleOnChangeSchool = (e) => {
        if (e.target.value === "all") {
            setFilter(students)
        } else {
            const filteredForm = students.filter((value) => {
                return value.school === e.target.value
            })
            setFilter(filteredForm)
        }
        setOpenSchool(false)
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
                    <Radio value="active">ACTIVE</Radio>
                    <Radio value="inactive">INACTIVE</Radio>
                    <Radio value="other">OTHER</Radio>
                </Radio.Group>
            </div>
        </div>
    )

    const onChange = (range) => {
        setPickerRange(range)
        fetchPeriods(`periods=${moment(range[0]).format("YYYY")},${moment(range[1]).format("YYYY")}`)
    }

    useEffect(() => {
        fetchPeriods("current=true")
    }, [])

    return (
        <div className="Students">
            <div className="layout-content">
                <Row >
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24" style={{ paddingRight: 20 }}>
                        <Card bordered={false} className="criclebox cardbody h-full" style={{ paddingRight: 20, paddingTop: 10 }}>
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
                                                width: 140,
                                                outline: "none"
                                            }}
                                        />
                                    </div>
                                    <Paragraph className="lastweek">{filter.length} Student{filter.length > 0 ? "s" : ""}</Paragraph>
                                </div>
                                <div className="ant-filtertabs">
                                    <div className="antd-pro-pages-dashboard-analysis-style-salesExtra">
                                        <Popover open={openSchool} onOpenChange={(newOpen) => setOpenSchool(newOpen)} bordered placement="bottom" content={ContentSchoolFilter} trigger="click">
                                            <Button style={{ width: 100, marginRight: 10 }}>Schools</Button>
                                        </Popover>
                                        <Popover open={openFilter} onOpenChange={(newOpen) => setOpenFilter(newOpen)} placement="bottom" content={ContentStatusFilter} trigger="click">
                                            <Button style={{ width: 100 }}>Filter</Button>
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                            <Form form={form} component={false}>
                                <Table
                                    components={EditableCell}
                                    data={filter}
                                    columns={mergedColumns}
                                    onCancel={cancel}
                                    onChange={handleChange}
                                />
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Students