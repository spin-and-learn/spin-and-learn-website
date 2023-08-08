import React, { useEffect, useState, useContext } from 'react'
import { Button, Modal } from 'antd'

// components
import LandingPage from '../components/LandingPage'
import OurFocus from '../components/OurFocus'
import StudentRegistration from '../components/forms/StudentRegistration'
import OurMission from '../components/OurMission'
import Newsletters from '../components/Newsletters'
import Footer from '../components/Footer'
import { MainContext } from '../contexts/MainContext'

const Home = () => {
    const { isOpen, setOpen } = useContext(MainContext)

    return (
        <div className="Home">
            <LandingPage />
            <OurFocus />
            <OurMission />
            <Newsletters />
            <Footer />
        </div>
    )
}

export default Home
