import React, { useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);

  // Fetch project data dynamically (optional: replace with your API endpoint)
  useEffect(() => {
    const fetchProjects = async () => {
      const data = [
        {
          name: "e-Learning System Management",
          des: "A comprehensive project using SQL, MongoDB, PHP Laravel 11, React, and Node.js to build a scalable web application.",
          projectlink: "https://example.com/mern-stack",
          techused: [
            { techname: "MongoDB" },
            { techname: "Express.js" },
            { techname: "React.js" },
            { techname: "Node.js" },
            { techname: "PHP Laravel 11" },
            { techname: "SQL" },
            { techname: "HTLM5/CSS3" },
          ],
        },
        {
          name: "MERN Stack",
          des: "A comprehensive project using MongoDB, Express, React, and Node.js to build a scalable web application.",
          projectlink: "https://example.com/mern-stack",
          techused: [
            { techname: "MongoDB" },
            { techname: "Express.js" },
            { techname: "React.js" },
            { techname: "Node.js" },
          ],
        },
        {
          name: "Photo Editor",
          des: "A photo editing application that provides advanced features like cropping, filters, and export options.",
          projectlink: "https://example.com/photo-editor",
          techused: [
            { techname: "React.js" },
            { techname: "CSS Modules" },
            { techname: "Canvas API" },
          ],
        },
        {
          name: "E-Commerce Platform",
          des: "An e-commerce application with features like user authentication, product listings, and a payment gateway.",
          projectlink: "https://example.com/ecommerce-platform",
          techused: [
            { techname: "Next.js" },
            { techname: "TypeScript" },
            { techname: "Stripe API" },
          ],
        },
      ];
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container" id="projects">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {projects.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
