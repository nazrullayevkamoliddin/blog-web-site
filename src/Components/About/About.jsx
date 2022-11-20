import React from "react";
import Me from "../../assets/images/main-img.png";
import "./about.css";
import Navbar from "../Navbar/Navbar";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about">
        <div className="main">
          <Bounce left cascade>
            <img src={Me} />
          </Bounce>
          <Zoom righ cascade>
            <div className="about-text">
              <h2>About Me</h2>
              <h5>
                Developer <span>& Designer</span>
              </h5>
              <p>
                {" "}
                I am a full stack web developer. I can provide clean code and
                pixel perfect design. I also make the website more & more
                interactive with web animations.I can provide clean code and
                pixel perfect design. I also make the website more & more
                interactive with web animations.A responsive design makes your
                website accessible to all users, regardless of their device.
              </p>
              <button type="button">Let's Talk</button>
            </div>
          </Zoom>
        </div>
      </section>
    </div>
  );
};

export default About;
