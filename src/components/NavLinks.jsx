import React from 'react'
import { Link } from 'react-router-dom'
const NavLinks = () => {
    const links = [
        { path: "about-us", name: "About us" },
        { path: "store", name: "Store" },
        { path: "events", name: "Events" },
        { path: "programs", name: "Programs" },
        { path: "login", name: "Log In" }
    ]
    return (
        <div className="nav-links">
            {links.map((link, key) => (
                <Link to={link.path} key={`nav-links-${link.path}-${key}`} >{link.name}</Link>
            ))}
        </div>
    )
}

export default NavLinks
