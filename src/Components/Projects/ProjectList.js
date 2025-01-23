import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
//import Zoom from "/Zoom"; // Remove the incorrect import

const ProjectList = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(false);

  const colors = [
    "#800080",
    "#FFA500",
    "#2F539B",
    "#36454F",
    "#2B3856",
    "#0000FF",
    "#50EBEC",
    "#556B2F",
    "#F5E216",
    "#FFBF00",
  ];

  const handleShowandCollapse = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  return (
    <div
      className={show ? "project-list-opened" : "project-list"}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p onClick={handleShowandCollapse}>
          {show ? <FcCollapse size={20} /> : <FcExpand size={20} />}
        </p>
      </div>
      <div className="description">
        {show ? (
          <p>{des}</p>
        ) : (
          <p>
            {des.substring(0, 50)}...
            <button
              style={{
                background: "none",
                border: "none",
                color: "green",
                cursor: "pointer",
              }}
              onClick={handleShowandCollapse}
            >
              Read More
            </button>
          </p>
        )}
      </div>
      <div className="row">
        {techused &&
          techused.map((tech, index) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
              key={index}
            >
              <div className="tech-used-in-project">
                <p style={{ backgroundColor: colors[index % colors.length] }}>
                  {tech.techname}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="live-demo-button">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={projectlink}
          aria-label={`Live demo for ${name}`}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;