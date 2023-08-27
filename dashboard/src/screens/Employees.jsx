import React from 'react'
import { Card } from "antd"
import Employees from "../components/employes"
import Header from '../components/employes/Header'

const EmployeesScreen = () => {
    return (
        <div className='EmployeesScreen'>
            <Header/>
            <Employees/>
        </div>
    )
}

export default EmployeesScreen
