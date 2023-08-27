import React from 'react'
import Button from './Button'
import ReactPlayer from 'react-player'

const OurMission = () => {
    return (
        <div className="OurMission mt-1">
            <div className="wrap container">
                <section className="left mt-5">
                    {/* <ReactPlayer
                        style={{ borderRadius: 50 }}
                        width={530}
                        url='https://vimeo.com/395157539?share=copy'
                        controls
                    /> */}
                    <div className="iframe">
                        <iframe
                            // style={{ borderRadius: 50 }}
                            src="https://player.vimeo.com/video/395157539?h=23bc613845"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowfullscreen />
                    </div>
                </section>
                <div className='right-wrap'>
                    <div>
                        <section className="right mt-4">
                            <h1>Our Mission</h1>
                            <p>
                                Develop students to become leaders in the sport of table tennis and be able to use that skill for problem solving, becoming proficient athletes, and making a career as players and competitors
                            </p>
                        </section>
                        <div className="ms-3">
                            <Button onClick={() => window.location.href = "/programs"} height={45} title={"Get Programs"} />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurMission
