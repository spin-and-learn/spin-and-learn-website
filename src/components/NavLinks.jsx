import { Space } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../contexts/MainContext'

const NavLinks = () => {
    const { isLoggedIn } = useContext(MainContext)
    const [pathname, setPathname] = useState("/")

    const links = [
        { path: "programs", name: "Programs" },
        { path: "events", name: "Events" },
        { path: "store", name: "Store" },
        { path: "about", name: "About" },
    ]

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [window.location.pathname])

    return (
        <div className="nav-links">
            {links.map((link, key) => (
                <a className="hover" href={link.path} key={`nav-links-${link.path}-${key}`} style={{ color: pathname === "/" + link.path ? "rgba(9, 114, 206, 0.7)" : "#0972CE" }}>{link.name} </a>

            ))}
            {!isLoggedIn && <a className="hover" href={"signup"} style={{ color: pathname === "/signup" ? "rgba(9, 114, 206, 0.7)" : "#0972CE" }}> Sign Up </a>}
            {!isLoggedIn && <a className="hover" href={"login"} style={{ color: pathname === "/login" ? "rgba(9, 114, 206, 0.7)" : "#0972CE" }}> Log In </a>}
        </div>
    )
}

export default NavLinks
