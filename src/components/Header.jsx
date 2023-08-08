import "../styles/Header.scss"
import React from 'react'
import NavLinks from "./NavLinks"
import Button from "./Button"
import Logo from "./Logo"


const Header = () => {

    const handleGetProgram = () => {
        window.location.href = "/forms"

    }


    return (
        <div className="Header">
            <div className="left">
                <Logo />
            </div>

            <div className="right">
                <NavLinks />
                <div className="ms-2">
                    <Button onClick={handleGetProgram} height={40} width={200} filled={true} title={"Get Programs"} />
                </div>
            </div>
        </div>
    )
}

export default Header
