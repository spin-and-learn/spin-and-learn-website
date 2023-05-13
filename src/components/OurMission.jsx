import React from 'react'
import mission from "../assets/img/mission.png"
import Button from './Button'

const OurMission = () => {
    return (
        <div className="OurMission mt-1">
            <div className="wrap container">
                <section className="left mt-5">
                    <img className="hover" src={mission} alt="focus-img" />
                </section>
                <section className="right mt-4">
                    <h1>Our Mission</h1>
                    <span style={{color: '#33354d'}}>Develop students to become leaders in the sport of table tennis and be able to use that skill for problem solving, becoming proficient athletes, and making a career as players and competitors</span>
                    <div className="right-bottom mt-4">
                        <Button onClick={() => window.location.href = "/forms"} height={45} title={"Get Programs"} />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default OurMission
