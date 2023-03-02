import React from 'react'
import logo from '../asserts/SLheadlineLogo.png'



const Logo = () => {

    return (
        <div className='Logo'>
            <a href="/">
                <img src={logo} alt='logo-in-header' width="200px" height="65px" />
            </a>
        </div>

    )
}

export default Logo
