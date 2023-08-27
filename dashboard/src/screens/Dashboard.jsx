import { useState } from "react"
import { Empty, Card, Col, Row, Tag } from "antd"
import Paragraph from "antd/lib/typography/Paragraph"
import Title from "antd/lib/typography/Title"
import Table from "../components/layout/Table"
import { students } from "../mocks"
import PieChart from "../components/chart/Pie"

const studentData = students()

const Dashboard = () => {
    const [data, setData] = useState(studentData)

    const columns = [
        {
            key: "recently-time-0",
            title: 'Date',
            dataIndex: 'date',
            width: '15%',
            editable: true,
        },
        {
            key: "recently-time-1",
            title: 'Period',
            dataIndex: 'period',
            width: '40%',
            editable: true,
        },
        {
            key: "recently-time-2",
            title: 'Full Name',
            dataIndex: 'fullName',
            width: '40%',
            editable: true,
            render: (tex, row) => {
                console.log(row);
                return (
                    <span>{row.firstName} {row.lastName}</span>
                )
            }
        },
        {
            key: 2,
            title: 'Time',
            dataIndex: 'time',
            width: '15%',
            editable: true,
        },
        {
            key: 5,
            title: 'School',
            dataIndex: 'school',
            width: '15%',
            editable: true
        }
    ]

    return (
        <div className="Dashboard">
            <Row gutter={16}>
                {[0, 2, 3, 4].map(item => (
                    <Col span={6} className="hover active">
                        <Card bordered={false} className="card-body" style={{ height: 100 }}>
                            <Row>
                                <div className="icon-box">
                                    <span class="material-icons">
                                        face
                                    </span>
                                </div>
                                <div className="info">
                                    <b>Total Actived Students</b>
                                    <span>20 Students</span>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="mt-3">
                <Col style={{ width: "69%" }}>
                    <Card>
                        <Title className="mb-3" level={4}>Latest Clocks</Title>
                        <Table
                            columns={columns}
                            data={data}
                        />
                        <Title className="mt-3 hover active view-more" level={5}>
                            View More
                            <span class="material-symbols-outlined">
                                navigate_next
                            </span>
                        </Title>
                    </Card>
                </Col>
                <Col className="ms-3" style={{ width: "29.8%" }}>
                    <Card className="chart">
                        <Title className="hover active view-more" level={5}>All Spensess</Title>
                        <PieChart />
                        <Title className="hover active view-more" level={5}>
                            View More
                            <span class="material-symbols-outlined">
                                navigate_next
                            </span>
                        </Title>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
