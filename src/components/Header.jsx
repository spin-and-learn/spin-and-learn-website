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
               <Logo/>
            </div>


            <div className="right">
                <NavLinks />
                {/*  */}
                <Button onClick={handleGetProgram} title={"Get Program"} />
            </div>
        </div>
    )
}

export default Header
