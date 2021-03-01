import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/project.css"

const myProjects = [
  {
    image: "/images/yourstory.png",
    title: "Yourstory Clone",
    description:
      "A website that provides the latest news and related stories on Indian startups.",
    source: "https://github.com/vikash93825/Yourstory-clone",
    demoLink: "https://yourstory-clone.netlify.app/",
  },
  {
    image: "/images/instagram.png",
    title: "Instagram Clone",
    description:
      "A social media website where users can see and comment on the post and post their own content.",
    source: "https://github.com/MahenParameshwar/Instagram-Clone-React",
    demoLink: "https://instagram-cloned-app.netlify.app/login",
  },
  {
    image: "/images/db.png",
    title: "Quiz DB",
    description:
      "A Web quiz app for conducting quizzes and easy management of results.",
    source: "https://github.com/vikash93825/masai-sprint-3",
    demoLink: "https://vikash93825.github.io/masai-sprint-3/",
  },
  {
    image: "/images/trello.png",
    title: "Trello Task",
    description:
      "A web application for users to manage their tasks, add and edit the tasks.",
    source: "https://github.com/vikash93825/trello-app",
    demoLink: "https://trello-task.netlify.app/",
  },
  {
    image: "/images/bookShop.png",
    title: "Book Shop",
    description:
      "A web book app where users can see a list of all books and add the book to the cart.",
    source: "https://github.com/vikash93825/ECS-project",
    demoLink: "https://bookapplist.netlify.app/",
  }
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
