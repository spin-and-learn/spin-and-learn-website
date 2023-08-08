import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../contexts/MainContext'
import { SmileOutlined } from '@ant-design/icons';
import Dropdown from './Dropdown'

const NavLinks = () => {
    const { isLoggedIn, setOpen, isOpen } = useContext(MainContext)
    const [pathname, setPathname] = useState("/")

    const programs = [
        {
            title: "Table Tennis Lsessons",
            path: "/programs"
        },
        {
            title: "S&L Academics",
            path: "/programs"
        },
        {
            title: "Our Schools",
            path: "/programs"
        }
    ]

    const events = [
        {
            title: "Upcoming Events",
            path: "/events"
        },
        {
            title: "Tournaments",
            path: "/tournaments"
        },
        {
            title: "Open Tables",
            path: "/open-tables"
        }
    ]

    const links = [
        { path: "programs", name: "Programs" },
        { path: "events", name: "Events" },
        { path: "store", name: "Store" },
        { path: "about", name: "About" }
    ]


    useEffect(() => {
        setPathname(window.location.pathname)
    }, [window.location.pathname])


    return (
        <div className="nav-links">
            {links.map((link, key) => (
                (link.path === "store" || link.path === "about") ?
                    <a className="hover" href={link.path} key={`nav-links-${link.path}-${key}`} style={{ color: pathname === "/" + link.path ? "rgba(9, 114, 206, 0.7)" : "#0972CE" }}>
                        {link.name + " "}
                    </a> :
                    <Dropdown key={`nav-links-${link.path}-${key}`} title={link.name} items={link.path === "programs" ? programs : events} />
            ))}
            {!isLoggedIn && <a className="hover" href={"signup"} style={{ color: pathname === "/signup" ? "rgba(9, 114, 206, 0.7)" : "#0972CE" }}> Sign Up </a>}
            {!isLoggedIn && <a className="hover" href={"login"} style={{ color: pathname === "/login" ? "rgba(9, 114, 206, 0.7)" : "#0972CE" }}> Log In </a>}
        </div>
    )
}

export default NavLinks
