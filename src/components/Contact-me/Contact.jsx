import React from "react";
import "./Contact.css";

export default function Contact() {
  const redirect = () => {
    window.open("https://www.linkedin.com/in/ayush-kumar-484013264/", "_blank");
  };

  return (
    <>
      <div className="footer">
        <div className="icons">
          <div id="logo">
            <img src={require("../../images/gmail.png")} width={30} />
          </div>
        </div>
      </div>
    </>
  );
}
