import React, { useEffect, useState } from 'react'
import { Empty, Card, DatePicker, Radio, Popover, Button, Input } from "antd"
import Paragraph from "antd/lib/typography/Paragraph"
import Title from "antd/lib/typography/Title"
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { fetchPeriods } from '../../redux/apiFetchs'

const Header = ({ students }) => {
    const [openSchool, setOpenSchool] = useState(false)

    const handleOnChangeSchool = () => {

    }

    return (
        <div className='Header'>
            <Card>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Input style={{ width: 250 }} placeholder='Search by name' />
                    <div>
                        <Popover open={openSchool} onOpenChange={(newOpen) => setOpenSchool(newOpen)} bordered placement="bottom" content={
                            <Radio.Group style={{ display: "flex", flexDirection: "column", width: 150 }} onChange={handleOnChangeSchool} defaultValue="all">
                                <Radio value="all">ALL</Radio>
                                <Radio value="ps1">PS1</Radio>
                                <Radio value="ps2">PS2</Radio>
                                <Radio value="ps3">PS3</Radio>
                            </Radio.Group>

                        } trigger="click">
                            <Button style={{ width: 100, marginRight: 10 }}>Schools</Button>
                        </Popover>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Header
