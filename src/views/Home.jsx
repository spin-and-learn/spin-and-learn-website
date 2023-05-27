import React, { useEffect } from 'react'

// components
import LandingPage from '../components/LandingPage'
import OurFocus from '../components/OurFocus'
import OurMission from '../components/OurMission'
import Newsletters from '../components/Newsletters'
import Footer from '../components/Footer'

const Home = () => {
    
    return (
        <div className="Home">
            <LandingPage />
            <OurFocus />
            <OurMission />
            <Newsletters />
            <Footer/>
        </div>
    )
}

export default Home
