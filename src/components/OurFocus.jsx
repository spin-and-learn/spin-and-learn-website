import React from 'react'
import focus from "../assets/img/focus.jpg"
import Button from './Button'

const OurFocus = () => {
    return (
        <div className="OurFocus">
            <div className="wrap">
                <section className="left">
                    <img src={focus} alt="focus-img" />
                </section>
                <section className="right">
                    <h1>Our focus is to meet your school’s needs</h1>
                    <h1>If you want to...</h1>
                    <ul>
                        <li >Increase students school attendance by effectively
                            motivating them to come to school
                        </li>
                        <li>Enhance the physical, mental, and emotional
                            well-being of all student
                        </li>
                        <li>Develop students confidence to become leaders in
                            the sport of table tennis
                        </li>
                    </ul>
                    <div className="right-bottom">
                        <h1>You can gain access through</h1>
                        <Button height={50} title={"Get Programs"} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OurFocus
