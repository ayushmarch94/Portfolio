import React from "react";
import "./Contact.css";
import "./ContactRes.css";
import { send } from "@emailjs/browser";

export default function Contact() {

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
        <div id="contact" className="contact">
          <form action="https://formspree.io/f/xbjvzkja" method="POST" className="ContactBox">
            <h1>Contact Me</h1>
            <input name="name" placeholder="NAME" type="text" id="name" />
            <input name="email" placeholder="YOUR EMAIL ID" type="email" id="emailAddress" required />
            <textarea name="message" placeholder="ENTER MESSAGE" type="text" id="message" />
            <button  type="submit" value={send}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
