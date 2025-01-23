import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "ICMPA UNESCO-CHAIR/ University of Abomey-calavi",
      degree: "M.Sc in Mathematical Physics",
      year: "2016 - 2018",
      des: "Thesis Title: General Second-Order q-Difference Equation",
    },
    {
      name: "University of Lome",
      degree: "B.Sc in Physics",
      year: "2010 - 2014",
      des: "Fondamental Physics",
    },
    {
      name: "Baccalaureate",
      degree: "Baccalaureate",
      year: "2008 - 2009",
      des: "Natural Science and Mathematics",
    },
  ];

  const colors = ["#4CAF50", "#FF9800", "#3F51B5"]; // Updated colors for better contrast

  return (
    <section className="container education-section" id="education">
      {/* Title */}
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF5722">
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: colors[index % colors.length], color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid ${colors[index % colors.length]}` }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index % colors.length], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5 className="vertical-timeline-element-subtitle" style={{ color: "#FFEB3B" }}>
                {item.degree}
              </h5>
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
