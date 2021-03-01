import React from "react";
import { Col, Row } from "react-bootstrap";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={""} alt="" />

      <div className="container">
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <img className="about-img" src="../images/vikash.JPG" alt="" />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="">
                I am a full-time coder molded and shaped by Massai school. I
                love to spend most of the time in coding and working on
                different projects. I love to work on challenging projects as it
                gives me a new way to learn new skills and makes me a better
                developer.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a
                  href="https://drive.google.com/file/d/1ydOxcH2GInRWH369bBOwlbZ8-Wu8QxKG/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col className="active-tab custom-ml-3">
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <div className="about-sub-data">
                  <div className="education">
                    <div>
                      <h5>Masai School</h5>
                      <ul>
                        <li className="text-justify">
                          Completed (HTML5, CSS, JavaScript, React, Redux.)
                          Training from Masai School, Bangalore.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5>B.tech</h5>
                      <ul>
                        <li className="text-justify">
                          Graduated in Information Technology engineering from
                          Haldia institute of Technology in 2020.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
