import React from "react";
import "./Face.css";
import "./FaceR.css";

export default function Face() {
  return (
    <div id="face" className="face">
      <div
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="face-main"
      >
        <div className="face-text">
          <div className="p1">
            <p>Hello, my name is</p>
          </div>
          <div className="p2">
            <p>Ayush Kumar</p>
          </div>
          <div className="p3">
            <p>Web Developer</p>
          </div>
        </div>
        <img src={require("../../images/front.gif")} width={300} />
      </div>
      <div className="linker">
        <img
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ayush-kumar-484013264/",
              "_blank"
            )
          }
          id="img1"
          src={require("../../images/linkedin.png")}
          width={30}
        />
        <img
          onClick={() =>
            window.open("https://github.com/ayushmarch94", "_blank")
          }
          src={require("../../images/github.png")}
          width={33}
        />
      </div>
    </div>
  );
}
