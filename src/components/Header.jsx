import "../styles/Header.scss"
import React from 'react'
import NavLinks from "./NavLinks"
import Button from "./Button"

const Header = () => {
    return (
        <div className="Header">
            <div className="left">

            </div>
            <div className="right">
                <NavLinks />
                <Button />
            </div>
        </div>
    )
}

export default Header
