import React, { useEffect } from "react";
import "./AboutMe.css";
import "./AboutR.css";

export default function AboutMe() {
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      id="about"
    >
      <img src={require("../../images/image.jpg")} width={30} />
      <div id="skills">
        <img src={require("../../images/js.png")} />
        <img src={require("../../images/react.png")} />
        <img src={require("../../images/html.png")} />
        <img src={require("../../images/CSS.png")} />
      </div>
    </div>
  );
}
