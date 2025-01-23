import React from "react";

import "./SidebarList.css";
import profilepic from "../../Image/a.jpg";


import { FcHome, 
FcNightPortrait,
FcTodoList,
FcContacts,
FcFactory,
FcSalesPerformance,

} from "react-icons/fc";

import {MdBiotech,
    MdCastForEducation,
} from "react-icons/md";
import {Link} from "react-scroll";

const SidebarList = ({expandSidebar})=>{
return(
  
    <React.Fragment>
        {expandSidebar ? (
            <div className="navbar-items">
                <div className="sidebar-profil-pic">
                    <img src={profilepic} alt= "profile-pic"/>
                </div>

                <ul>
                    <li className="nav-item">
                        <Link to="home"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                        >
                            <FcHome size={25}/>Home
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                        >
                            <FcNightPortrait size={25}/>
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="experience"
                            spy={true}
                            smooth={true}
                            duration={100}
                            offset={-100}
                        >
                            <   FcFactory size={25}/>
                            
                            Work Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="grapmult"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <MdBiotech size={25} color="orange"/>
                            GRAPMULT Stack
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <MdCastForEducation size={25} color="yellow"/>
                            Education
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcTodoList size={25}/>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="testimonials"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcSalesPerformance size={25}/>
                            Testimonials
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcContacts size={25}/>
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>
        ): (
            <div className="navbar-item-only-icons">

<ul>
                    <li className="nav-item">
                        <Link to="home"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <   FcHome size={25}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcNightPortrait size={25}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="experience"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcFactory size={25}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="grapmult"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <MdBiotech size={25} color="orange"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <MdCastForEducation size={25} color="yellow"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcTodoList size={25}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="testimonials"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcSalesPerformance size={25}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={-100}
                        >
                            <FcContacts size={25}/>
                        </Link>
                    </li>
                </ul>


            </div>
        )}
        
    </React.Fragment>
 
);
}

export default SidebarList;
