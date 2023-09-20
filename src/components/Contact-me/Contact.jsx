import React from "react";
import "./Contact.css";

export default function Contact() {
  const redirect = () => {
    window.open("https://www.linkedin.com/in/ayush-kumar-484013264/", "_blank");
  };

  return (
    <>
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
        <div className="contact">
          <form className="ContactBox">
            <h1>Contact Me</h1>
            <input placeholder="NAME" type="text" id="name" />
            <input placeholder="SUBJECT" type="text" id="Subject" />
            <input placeholder="YOUR EMAIL ID" type="text" id="emailAddress" />
            <textarea placeholder="ENTER MESSAGE" type="text" id="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
