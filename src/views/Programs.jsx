import React from 'react'
import StudentRegistration from '../components/forms/StudentRegistration'
import { Card } from 'antd'
import { programs } from '../mocks'
import Button from '../components/Button'

const Programs = () => {
    return (
        <div className="Programs mt-3">
            <div className="title-box mt-3 mb-5">
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
        </div >
    )
}

export default Programs
