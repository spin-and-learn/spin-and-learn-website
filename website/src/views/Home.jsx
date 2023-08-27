import React from 'react'

// components
import LandingPage from '../components/LandingPage'
import OurFocus from '../components/OurFocus'
import OurMission from '../components/OurMission'
import Newsletters from '../components/Newsletters'

const Home = () => {
    return (
        <div className="Home">
            <div className="main">
                <LandingPage />
                <OurFocus />
                <OurMission />
                <Newsletters />
            </div>
        </div>
    )
}

export default Home
