import React from "react";
import "./service.css";
import { CgWebsite } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="service">
        <Flip top cascade>
          <div className="title">
            <h2>Our Services</h2>
          </div>
        </Flip>
        <Zoom bottom cascade>
          <div className="box">
            <div className="card">
              <CgWebsite className="icon" />
              <h5>Web Development</h5>
              <div className="pra">
                <p>
                  Every website should be built with two primary goals: Firstly,
                  it needs to work across all devices. Secondly, it needs to be
                  fast as possible.
                </p>

                <p style={{ textAlign: "center" }}>
                  <a class="button" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div class="card">
              <BiUserCircle className="icon" />
              <h5>Web Development</h5>
              <div class="pra">
                <p>
                  Every website should be built with two primary goals: Firstly,
                  it needs to work across all devices. Secondly, it needs to be
                  fast as possible.
                </p>

                <p style={{ textAlign: "center" }}>
                  <a class="button" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div class="card">
              <AiFillBell className="icon" />
              <h5>Web Development</h5>
              <div class="pra">
                <p>
                  Every website should be built with two primary goals: Firstly,
                  it needs to work across all devices. Secondly, it needs to be
                  fast as possible.
                </p>

                <p style={{ textAlign: "center" }}>
                  <a class="button" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Service;
