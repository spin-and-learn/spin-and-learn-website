import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';

const Index = () => {
    const [employees, setEmployees] = useState([])

    const fetchEmployees = async () => {
        await axios.get("/employees").then(res => {
            setEmployees(res.data.employees)
        })
    }

    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <div className="Employees">
            {employees.map((employee, key) => (
                <a key={key} href={`/employee/${employee.uuid}`}>
                    <Card className="employee hover active">
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <div className="profile-img">
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" alt="" srcSet="" />
                            </div>
                            <div className='mt-3' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <span>{employee.firstName} {employee.lastName}</span>
                                <b style={{ color: "rgba(000, 000, 000,0.5)" }}>PS1</b>
                            </div>
                        </div>
                    </Card>
                </a>
            ))}
        </div>
    );
}

export default Index;
