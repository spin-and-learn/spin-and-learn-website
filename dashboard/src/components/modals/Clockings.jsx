import { Modal, TimePicker, Spin, Result } from 'antd'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../contexts/MainContext'
import axios from 'axios';

const ClockingModal = ({ openModal, setOpenModal, data, setData, fetchProfile }) => {
    const { } = useContext(MainContext)
    const [today, setToday] = useState("")
    const [clocks, setClocks] = useState([])
    const [isUpdating, setIsUpdating] = useState(false)
    const [errorUpdating, setErrorUpdating] = useState(false)


    const hadleCloseModal = () => {
        setOpenModal(false)
        setClocks([])
        setData({})

    }

    const onChange = (time, key) => {
        const newDate = clocks
        newDate[key] = time.toISOString()

        setClocks(newDate)
        console.log({
            clocks,
            time: time.toISOString(),
            key,
            newDate
        })
    }

    const addClock = () => {
        const date = new Date().toISOString()
        setClocks([...clocks, date])

        console.log(clocks)
    }

    useEffect(() => {
        const days = ["sunday", "monday", "tuesday", "wednesday", "thurday", "friday", "saturday"]
        const date = new Date()
        const day = date.getDay()

        setToday(days[day])
        setClocks([])

    }, [])

    useEffect(() => {
        setClocks(data?.data)
    }, [data])


    const handleDelete = ({ time }) => {
        const _clocks = clocks
        const index = _clocks.indexOf(time);

        if (index > -1) {
            _clocks.splice(index, 1)
            setClocks([..._clocks])
        }
    }

    const handleSave = async () => {
        setIsUpdating(true)
        await axios.patch("/clockings/1", {
            [data?.day.toLowerCase()]: clocks
        }).then((res) => {
            console.log(res.data)
            setTimeout(() => {
                hadleCloseModal()
                fetchProfile()
                setIsUpdating(false)
            }, 1500)
        })
    }

    const ResultUpdated = () => {
        return (
            <div style={{ height: 300, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Result status="success" title="Time Updated Successfully" />
            </div>
        )
    }

    return (
        <Modal
            className='ClockingModal'
            closable={!isUpdating}
            bodyStyle={{
                borderRadius: 15,
                background: "white"
            }}
            centered open={openModal} footer={null} onOk={hadleCloseModal} onCancel={hadleCloseModal} width={400}>
            {!isUpdating ?
                <div style={{ minHeight: 300, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                        <div className style={{ borderColor: "white", display: "flex", alignItems: "center" }}>
                            <h4 className='mb-0' >{data?.day}</h4>
                            <div unselectable="on" className='ms-2 mt-2' onClick={addClock}>
                                <span unselectable="on" className="material-symbols-outlined hover active add-clock" style={{ padding: 0 }}>add</span>
                            </div>
                        </div>
                        <b className='m-0' style={{ color: 'gray' }}>{data.period}</b>
                        <div className='mt-2' style={{ display: "flex" }}>
                            <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: 7 }}>
                                {clocks && clocks.map((time, key) => (
                                    <div key={key + "modal-time"} className='modal-time-box'>
                                        <div className='delete-icon'>
                                            <span onClick={() => handleDelete({ key, time })} className="material-icons active">
                                                clear
                                            </span>
                                        </div>
                                        <TimePicker className='mt-2' style={{ height: 60, width: 100 }} key={"TimePicker-" + key} defaultValue={moment(time)} use12Hours format="h:mm a" onChange={(value) => onChange(value, key)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div onClick={handleSave} className='save-container mt-3'>
                        <button className='btn'>Save</button>
                    </div>
                </div>
                :
                <ResultUpdated />
            }
        </Modal>
    )
}
export default ClockingModal