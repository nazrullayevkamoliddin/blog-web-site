import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import Fade from "react-reveal/Fade";
import Typed from "react-typed";
const Home = () => {
  return (
    <>
      <div className="hero">
        <Navbar />
        <Fade left cascade>
          <div className="content">
            <h4>Hello, my name is</h4>
            <h1>Kamoliddin</h1>
            <h2>
              <Typed
                strings={[
                  "I'm a Full Stack Dev",
                  "I love hacking",
                  "I'm Team Leader",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </h2>

            <div className="newsletter">
              <form>
                <input
                  type="email"
                  name="email"
                  className="email"
                  placeholder="Enter Your Email"
                />
                <input
                  type="submit"
                  name="submit"
                  value="Lets Start"
                  className="start"
                />
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
