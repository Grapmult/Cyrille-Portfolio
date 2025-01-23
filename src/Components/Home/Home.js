import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./CV-other-Haliya_2.pdf";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <section className="home" id="home">
      {/* Theme Toggle */}
      <div
        className="theme-change"
        onClick={changeTheme}
        aria-label="Change Theme"
      >
        {theme === "light" ? (
          <p className="">
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="home-content">
        {/* Introduction Section */}
        <Fade right>
          <h1 className="home-heading">Hi, I'm E. Cyrille Haliya</h1>
        </Fade>
        <Zoom>
          <h3 className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "Graphic Designer",
                  "Web Designer",
                  "Videography",
                  "Social Media Content Creator",
                  "Branding and Identity Designer",
                  "E-learning and Educational Content Designer",
                  "Multimedia Content Creator",
                  "UI/UX Designer",
                  "Interpreter",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h3>
        </Zoom>

        {/* Action Buttons */}
        <Fade bottom>
          <div className="button-for-action">
            {/* Link to Contact Section */}
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80} // Adjust offset as needed
              aria-label="Navigate to Contact Section"
            >
              <div className="hire-me-button">Hire Me</div>
            </Link>

            {/* Resume Download */}
            <div className="get-resume-button">
              <a
                href={MyCv}
                download="Haliya_cv.pdf"
                aria-label="Download Resume"
              >
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Home;
