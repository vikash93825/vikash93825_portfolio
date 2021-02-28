import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/project.css"

const myProjects = [
  {
    image: "/images/yourstory.png",
    title: "Yourstory Clone",
    description:
      " The goal of this is to build an end-to-end clone of a yourstory website in which users can see and also create the post-story.",
    source: "https://github.com/vikash93825/Yourstory-clone",
    demoLink: "https://yourstory-clone.netlify.app/",
  },
  {
    image: "/images/instagram.png",
    title: "Instagram Clone",
    description:
      "The goal of this project is to build an end-to-end clone of Social media website in which users can see and comment on other users.",
    source: "https://github.com/MahenParameshwar/Instagram-Clone-React",
    demoLink: "https://instagram-cloned-app.netlify.app/login",
  },
];

const Project = () => {
  return (
    <div className="projects" id="projects">
      <div className="container pt-6 pb-6">
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project) => {
              return (
                <Col md={4} className="mb-5">
                  <div className="project-card">
                    <div className="img-section">
                      <img src={project.image} alt="" />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export { Project };
