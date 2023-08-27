import React from 'react'
import focus from "../assets/img/focus.png"
import Button from './Button'

const OurFocus = () => {
    return (
        <div className="OurFocus mb-5">
            <div className="wrap container">
                <section className="right mt-4">
                    <h1>Our focus is to meet your <br/>school's needs</h1>
                    <h1>If you want to...</h1>
                    <ul>
                        <li >Increase students school attendance by effectively
                            motivating them to come to school.
                        </li>
                        <li>Enhance the physical, mental, and emotional
                            well-being of all student.
                        </li>
                        <li>Develop students confidence to become leaders in
                            the sport of table tennis.
                        </li>
                    </ul>
                    <div className="right-bottom">
                        <h1 className='mb-3'>You can gain access through...</h1>
                        <Button onClick={() => window.location.href = "/programs"} height={45} title={"Get Programs"} />
                    </div>
                </section>
                <section className="left mt-5">
                    <img src={focus} alt="focus-img" />
                </section>
            </div>
        </div>
    )
}

export default OurFocus
