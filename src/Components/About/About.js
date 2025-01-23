import React from "react";
import "./About.css";
import ProfilePic from "../../Image/b.jpg";
import { Fade, Zoom, Flip } from "react-awesome-reveal"; // Import from react-awesome-reveal

const About = () => {
  return (
    <section className="container about-section" id="about">
      <div className="row">
        {/* Profile Picture */}
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <Zoom>
                <img src={ProfilePic} alt="Profile photo" />
              </Zoom>
            </div>
          </div>
        </Fade>

        {/* About Details */}
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>
            <Fade right>
              <p>
                Hi, I’m <strong>E. Cyrille Haliya</strong>, a passionate
                professional with expertise in mathematics, physics, and
                software development. With an M.Sc in Mathematical Physics and
                a B.Sc in Physics, I’ve contributed to research in mathematical
                modeling, algebraic structures, and pandemic evolution.
              </p>
              <p>
                Beyond academics, I’ve cultivated a diverse skill set in web
                development, translation, and digital marketing. Certified in
                Laravel 8 and Laravel 10, I’ve built advanced systems like
                School Management and Learning Management Systems. I’m also
                proficient in Python, C++, SQL, and multimedia tools such as
                Adobe Premiere Pro and Photoshop, enabling me to deliver
                creative and technical solutions.
              </p>
              <p>
                Outside of work, I’m an explorer at heart. Whether playing the
                piano, traveling, or diving into a book, I’m always seeking
                inspiration and new challenges. Let’s collaborate to create
                meaningful, impactful solutions!
              </p>
              <p>
                CALL: <strong>+228 90 93 81 65</strong> / WHATSAPP: <strong>+228 99 89 12 36</strong> / TELEGRAM: <strong>+228 99 89 12 36</strong>.  
              </p>
              <p>Email: <strong>cyzille19@gmail.com </strong> / <strong>ehaliya@aimsammi.org</strong> / <strong>upworkcyesso@gmail.com</strong></p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;