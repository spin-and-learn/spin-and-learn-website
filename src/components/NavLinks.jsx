import { Space } from 'antd'
import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

const NavLinks = () => {
    const { isLoggedIn } = useContext(MainContext)

    const links = [
        { path: "programs", name: "Programs" },
        { path: "events", name: "Events" },
        { path: "store", name: "Store" },
        { path: "about", name: "About" },
    ]

    return (
        <div className="nav-links">
            {links.map((link, key) => (
                <a className="hover" href={link.path} key={`nav-links-${link.path}-${key}`}>{link.name}</a>
            ))}
            {!isLoggedIn && <a className="hover" href={"login"}> Log In </a>}
        </div>
    )
}



export default NavLinks
