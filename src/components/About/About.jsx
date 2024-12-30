import React from "react";
import "./about.css";
// for profile image
import AboutImg from "../../assests/About-profile-img.jpg";
// for Resume
import CV from "../../assests/Devaraj Thangaraj.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My interdution</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="Profile_Image" className="about_img" />
        <div className="about_data">
          <Info />
          <p className="about_description">
          Jr. Software Developer from Cognizant Technology Solutions,
 specialized in React.js and Full-stack development. Enhancing user
 experience and software performance, demonstrating strong
 problem-solving and client support skills. Proven track record in
 boosting web application accessibility and efficiency through
 innovative coding and debugging techniques.
          </p>
          <a download={"Devaraj"} href={CV} className="button button--flex">
            Download CV <i class="uil uil-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
