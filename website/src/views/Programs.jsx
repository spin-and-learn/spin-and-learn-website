import React, { useEffect } from 'react'
import { Card } from 'antd'
import { programs } from '../mocks'
import Button from '../components/Button'
import player from "../assets/img/player.png"
import $ from "jquery"
import Partners from '../components/Partners'

const Programs = () => {

    useEffect(() => {
        $(".Header").css("background", "white")
    }, [])

    return (
        <div className="Programs">
            <div className="main">
                <section className="pt-5">
                    <div className="container d-flex">
                        <div className="title-box">
                            <h3 className="title mb-3">
                                Lorem ipsum dolor flex title elit.
                            </h3>
                            <p class="hero-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Minus fugiat eum, consequuntur necessitatibus
                                esse quod quam soluta vitae.                           </p>
                            <Button onClick={() => window.location.href = "/contact"} title={"Contact Us"} />
                        </div>
                        <div className="images-box">
                            <img src={player} alt="player-1" srcset="" />
                            <img src={player} alt="player-1" srcset="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="title-box mt-5 mb-5">
                        <h3 className="title">Enrichment Programs for All Schools!</h3>
                    </div>
                    <div className="programs-box">
                        {programs.map((program, key) => (
                            <Card key={"program-" + key} className="program">
                                <h2 className="title">{program.title}</h2>
                                <p className="paragraph card-service-v2">{program.description}</p>
                                <div className="card-service-v2-grid mt-4 mb-4">
                                    {program.listOptions.map((option, key) => (
                                        <div key={"program-list-option-" + key} className="card-service-v2-list-wrapper mb-3">
                                            <span style={{ color: program.listIconColor }} className="material-icons">
                                                check_circle
                                            </span>
                                            <span className="paragraph mt-1">{option}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button onClick={() => window.location.href = "/contact"} height={45} title={"Contact Us"} />
                            </Card>
                        ))}
                    </div>
                </section>
                <div className="">
                    <Partners />
                </div>
            </div>
        </div >
    )
}

export default Programs
