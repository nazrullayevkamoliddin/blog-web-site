import React from "react";
import "./skills.css";
import Navbar from "../Navbar/Navbar";
import Slide from "react-reveal/Slide";
const Skills = () => {
  return (
    <div>
      <Navbar />
      <div className="skills_section">
        <Slide top cascade>
          <div className="skills_head">
            <h2>
              My <span>Skills</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea
              molestias cupiditate eaque, quod, corrupti quis nulla pariatur nam
              blanditiis laborum excepturi! Et voluptate enim, ab eveniet
              aperiam quidem obcaecati accusantium, expedita, sapiente mollitia
              rerum tempore cum. Ipsam, eaque esse illum animi dolores nulla
              expedita earum debitis dicta recusandae obcaecati!
            </p>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="skills_main">
            <div className="skill_bar">
              <div className="info">
                <p>HTML</p>
                <p>90%</p>
                <div className="bar">
                  <span className="html"></span>
                </div>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>CSS</p>
                <p>80%</p>
                <div className="bar">
                  <span className="css"></span>
                </div>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>SASS</p>
                <p>80%</p>
                <div className="bar">
                  <span className="sass"></span>
                </div>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>JAVA SCRIPT</p>
                <p>75%</p>
                <div className="bar">
                  <span className="js"></span>
                </div>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>REACT JS </p>
                <p>70%</p>
                <div className="bar">
                  <span className="react"></span>
                </div>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>NODE JS </p>
                <p>50%</p>
                <div className="bar">
                  <span className="node"></span>
                </div>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>EXPRESS JS</p>
                <p>60%</p>
                <div className="bar">
                  <span className="express"></span>
                </div>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>MONGO DB</p>
                <p>50%</p>
                <div className="bar">
                  <span className="mongo"></span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;
