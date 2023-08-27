import "../styles/Header.scss"
import React from 'react'
import NavLinks from "./NavLinks"
import Button from "./Button"
import Logo from "./Logo"


const Header = () => {
    return (
        <div className="Header">
            <div className="container main">
                <div className="left col-6">
                    <Logo />
                </div>

                <div className="right col-6">
                    <NavLinks />
                    <div className="ms-2">
                        <Button onClick={() => window.location.href = "/programs"} height={40} width={200} filled={true} title={"Get Programs"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
