import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";

import {
    FcHome,
    FcNightPortrait,
    FcTodoList,
    FcContacts,
    FcFactory,
    FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech, MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, changeTheme }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <nav className="mobile-view-navbar">
            {/* Navbar Header */}
            <div className="navbar-header">
                <p>
                    <GiHamburgerMenu
                        size={25}
                        onClick={handleClick}
                        aria-expanded={open} /* Accessibility */
                        aria-label="Toggle navigation menu"
                    />
                </p>
            </div>

            {/* Mobile Navigation Dropdown */}
            {open && (
                <div className="mobile-navbar">
                    <ul>
                        <li className="nav-item-mobileview">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcHome size={25} />
                                Home
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcNightPortrait size={25} />
                                About
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            <Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcFactory size={25} />
                                Work Experience
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            <Link
                                to="grapmult"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdBiotech size={25} color="orange" />
                                GRAPMULT Stack
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <MdCastForEducation size={25} color="yellow" />
                                Education
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcTodoList size={25} />
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            <Link
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcSalesPerformance size={25} />
                                Testimonials
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                            >
                                <FcContacts size={25} />
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item-mobileview">
                            {/* Dark Mode Toggle */}
                            <Switch
                                onChange={changeTheme}
                                checked={theme === "light"}
                                aria-label="Toggle light/dark theme"
                            />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavbarMobileView;
