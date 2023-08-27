import React, { useState, useRef } from "react"
import { Form, InputNumber, Input, Tag, Space, Button } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import Table from "../components/layout/Table"
import { students } from "../mocks"
import FormsModal from "../components/forms/Modal"


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
    const [editingKey, setEditingKey] = useState('')
    const [filter, setFilter] = useState([])
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
        }
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

    return (
        <div className="Students">
            {/* <Table
                components={EditableCell}
                data={filter}
                columns={mergedColumns}
                onCancel={cancel}
                onChange={handleChange}
            /> */}
            <FormsModal/>
        </div>
    )
}

export default Students