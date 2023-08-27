import { Spin, Modal } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../contexts/MainContext'
import FormInputs from "./Form"

const FormsModal = () => {
    const { setForm, modalVivility, setModalVivility, isUpdatinForm, setIsUpdatingForm, } = useContext(MainContext)

    const hadleCloseModal = () => {
        setModalVivility(false)
    }

    useEffect(() => {
        setTimeout(() => {
            if (!modalVivility) {
                setForm({})
            }
        }, 400)
    }, [modalVivility])

    const form = {
        marginTop: 30,
        marginBottom: 30,
        paddingTop: 50,
        backgroundColor: "#fff",
    }
    const updating = {
        // backgroundColor: "rgba(0,0,0,0.001)",
        height: 150,
        paddingTop: 30,
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    }

    return (
        <Modal
            closable={isUpdatinForm ? false : true}
            bodyStyle={isUpdatinForm ? updating : form} centered open={true} footer={null} onOk={hadleCloseModal} onCancel={hadleCloseModal} width={isUpdatinForm ? 150 : 1000}>
            {isUpdatinForm ? <Spin size="large" /> : <FormInputs />}
        </Modal>
    )
}
export default FormsModal