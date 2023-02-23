import "../styles/Header.scss"
import React from 'react'
import NavLinks from "./NavLinks"

const Header = () => {
    return (
        <div className="Header">
            <div className="left">
                <span>1</span>
            </div>
            <div className="right">
                <NavLinks />
            </div>
        </div>
    )
}

export default Header
