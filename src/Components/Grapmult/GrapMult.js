import React, { useState } from "react";
import "./GrapMult.css";
import Fade from "react-awesome-reveal"; // Import from react-awesome-reveal
import Zoom from "react-awesome-reveal"; // Import from react-awesome-reveal

const GrapMult = () => {
  const data = [
    {
      name: "Graphic Design",
    },
    {
      name: "Web developpement",
    },
    {
      name: "Frontend Development",
    },
    {
      name: "UI/UX Design",
    },
    {
      name: "Backend Development",
    },
    {
      name: "Videography",
    },
    {
      name: "Youtube essentials",
    },
    {
      name: "Digital Marketing",
    },
    {
      name: "IB MYP/DP tutoring",
    },
    {
      name: "Programme Francais/ Tutoring",
    },
    {
      name: "Maths Teaching",
    },
    {
      name: "Reaserch in Algebra",
    },
    {
      name: "Kabye Translator",
    },
    {
      name: "Content creation",
    },
  ];

  const colors = [
    "F1C40F",
    "#00FFFF",
    "#800080",
    "#A52A2A",
    "#808000",
    "#FFA500",
    "#CECECE",
    "#2F539B",
    "#36454F",
    "#2B3856",
    "#0000FF",
    "#50EBEC",
    "#556B2F",
    "#F5E216",
    "#FFBF00",
  ];

  const [showMoreGrapMult, setShowMoreGrapMult] = useState(9);

  const loadMore = () => {
    setShowMoreGrapMult((prev) => prev + 3);
  };

  return (
    <div className="container grapmult-section" id="grapmult">
      <div className="section-title">
        <h5>GrapMult</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMoreGrapMult).map((item, index) => (
          <Fade right key={index}>
            <div
              className={index === 0 ? "tech-content-marked tech-content" : "tech-content"}
            >
              <span className="tech-number" style={{ backgroundColor: colors[index + 1] }}>
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreGrapMult >= data.length ? null : (
        <Zoom>
          <span className="load-more-grap-mult" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default GrapMult;