import React from "react";
import "./WorkExperience.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "MESPTA - Lycée de Nanegbe",
      position: "Web App Developer",
      des: "Developed a PHP Laravel Web App School Management System.",
      year: "Oct 2024 - Dec 2025",
      techskills: ["Laravel 10 and 11", "PHP ^8.3", "HTML5/CSS3", "JavaScript", "Sql"],
    },
    {
      companyname: "GRAPMULT",
      position: "Multimedia Designer",
      des: "Full Branding of the company, including company website and e-Learning Management System.",
      year: "Mar 2021 - Present",
      techskills: [
        "Laravel 8, 9, 10, 11",
        "PHP compatible versions",
        "HTML5/CSS3",
        "JavaScript",
        "Illustrator",
        "After Effects",
        "InDesign",
        "Photoshop",
        "Premiere Pro",
        "Camtasia",
        "Sql",
        "ReactJS",
        "VueJS",
        "ExpressJS",
        "Mern"
      ],
    },
    {
      companyname: "Christ Embassy Church",
      position: "Content Creator",
      des: "Video transcription, French-English translation, graphic design, and event planning.",
      year: "2020 - Present",
      techskills: ["Video Editing", "Premiere Pro", "Camtasia", "Photoshop", "Illustrator", "After Effects", "InDesign"],
    },
    {
      companyname: "GRAPMULT-ISD",
      position: "Content Creator",
      des: "YouTuber creating engaging video content.",
      year: "2019 - Present",
      techskills: ["Video Editing", "Premiere Pro", "Camtasia", "Photoshop"],
    },
    {
      companyname: "MEST",
      position: "Maths Teacher",
      des: "High School Education specializing in Algebra, Calculus I, Geometry, and Statistics.",
      year: "2020 - Present",
      techskills: ["Algebra", "Calculus I", "Geometry", "Statistics"],
    },
    {
      companyname: "ARC-EN-CIEL (IB School)",
      position: "International Baccalaureate Maths Teacher",
      des: "MYP and DP education in Mathematics.",
      year: "2020 - 2021",
      techskills: ["Algebra", "Calculus I", "Geometry", "Statistics"],
    },
  ];

  const colors = ["#8f8fff", "#000014", "#f09c00", "#8c5b00", "#0000f0", "#950aff"];

  return (
    <div className="container workexperience-section" id="experience">
      {/* Section Title */}
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF5722">
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index % colors.length], color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid ${colors[index % colors.length]}` }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index % colors.length], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>

              <p>{item.des}</p>
              <div className="tech-skills-container">
                {item.techskills.map((tec, tecIndex) => (
                  <span key={tecIndex} className="tech-skill">
                    {tec}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
