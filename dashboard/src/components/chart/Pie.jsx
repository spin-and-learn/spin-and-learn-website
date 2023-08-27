import { Col, Row } from 'antd';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => {

    return (
        <Row className="Pie">
            <PieChart width={160} height={250}>
                <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

                    ))}
                </Pie>
            </PieChart>
            <Col className=''>
                <ul>
                    {COLORS.map((item, key) => (
                        <li key={"pie-chart-" + key}>
                            <span style={{ color: item }} class="material-icons">
                                square
                            </span>
                            {item}
                        </li>
                    ))}

                </ul>
            </Col>
        </Row>
    )
}

export default PieChartComponent
