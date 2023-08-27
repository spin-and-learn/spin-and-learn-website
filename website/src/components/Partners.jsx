import React from 'react';
import { schools } from '../mocks';

const Partners = () => {
    return (
        <div className="Partners">
            <div class="logos-section">
                <div className="title-box mb-2 mt-2">
                    <h3 className="title">Schools Partners</h3>
                </div>
                <div className="schools">
                    {schools.map((school, key) => (
                        <div key={"school-" + key} className="integration hover">
                            <a key={key} href="" target="_blank" rel="noopener noreferrer">
                                <img src={school.logo} loading="lazy" alt="" className="welcomewords mb-2" />
                                {school.names.map((name, key) => (
                                    <span key={"school.names" + key}>{name}</span>
                                ))}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners;
