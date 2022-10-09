import React, { useState } from "react"
import "./Navbar.scss"
import { NavLink } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { BiSearchAlt } from "react-icons/bi"

import logo from "../../assets/logo.svg"
import hrt from "../../assets/hrt.svg"
import chat from "../../assets/chat.svg"
import acct from "../../assets/acct.svg"
import bar from "../../assets/bar.svg"
import search from "../../assets/search.svg"


const Navbar = () => {
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div >
            <div className="Navbar">
                <div className="logo-con nav-m">
                    <img src={bar} onClick={() => setIsOpen(true)} className="navbar-menubar" />
                </div>
                <div className="left-nav">
                    <img src={bar} onClick={() => setIsOpen(true)} className="navbar-men  nav-h" />
                    <img src={logo} alt="logo" className="navbar-name" />
                </div>
                <div className="middle-nav nav-h">
                    <img src={search} />
                    <input type="text" placeholder="Find Item" />
                </div>
                <div className="right-nav">
                    <NavLink className="navbar-links nav-h" to="/">
                        <img src={acct} alt="logo" className="nav-icon" />
                        Accounts
                    </NavLink>
                    <NavLink className="navbar-links nav-h" to="/">
                        <img src={chat} alt="logo" className="nav-icon" />
                        Chat
                    </NavLink>
                    <NavLink className="navbar-links nav-h" to="/">
                        <img src={hrt} alt="logo" className="nav-icon" />
                        My Interest
                    </NavLink>
                </div>
                <div className="right-nav nav-m">
                    <NavLink className="navbar-links" to="/">
                        Join
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Navbar
