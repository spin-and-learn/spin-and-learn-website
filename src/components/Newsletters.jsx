import React, { useState } from 'react'
import Button from './Button'
import { Select } from 'antd'

const Newsletters = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [jobRole, setJobRole] = useState("")
    const [solutionInterest, setSolutionInterest] = useState("")

    const onChange = (e) => {
        switch (e.id) {
            case "fullName":
                setFullName(e.value)
                break;
            case "email":
                setEmail(e.value)
                break;
            case "jobRole":
                setJobRole(e.value)
                break;
            case "solutionInterest":
                setSolutionInterest(e.value)
                break;
            default:
                break;

        }
        console.log({
            fullName,
            email,
            jobRole,
            solutionInterest
        })
    }

    return (
        <div className="Newsletters mb-5">
            <div className="wrap container">
                <section className="right mt-4">
                    <h1>Subscribe for our Newsletter!</h1>
                    <span>
                        Are you passionate about our program?
                        Become one of the first people to be alerted about
                        our events, tournaments, STEM sessions, and new store
                        arrivals through your email.
                    </span>
                    <div className="right-bottom mt-4">
                        <Button
                            onClick={() => window.location.href = "/forms"}
                            title={"More info"}
                        />
                    </div>
                </section>
                <section className="left mt-5">

                    <form>
                        <div className="inputs">
                            <label htmlFor="fullName">Full Name</label>
                            <input onChange={(e) => onChange({ id: "fullName", value: e.target.value })} type="text" id='fullName' />
                            <label htmlFor="email">Email</label>
                            <input onChange={(e) => onChange({ id: "email", value: e.target.value })} type="text" id='email' />
                            <label htmlFor="jobRole">Job Role</label>
                            <Select
                                id="jobRole"

                                showSearch
                                optionFilterProp="children"
                                onChange={(value) => onChange({ id: "jobRole", value: value })}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'tom',
                                        label: 'Tom',
                                    },
                                ]}
                            />
                            <label htmlFor="solutionInterest">Solution Interest</label>
                            <Select
                                id="solutionInterest"
                                showSearch
                                optionFilterProp="children"
                                onChange={(value) => onChange({ id: "solutionInterest", value: value })}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'tom',
                                        label: 'Tom',
                                    },
                                ]}
                            />
                        </div>
                        <Button
                            onClick={() => window.location.href = "/forms"}
                            width={220}
                            title={"Submit"}
                        />
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Newsletters
