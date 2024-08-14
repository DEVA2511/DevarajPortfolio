import React from "react";
import "./about.css";
// for profile image
import AboutImg from "../../assests/About-profile-img.jpg";
// for Resume
import CV from "../../assests/Devaraj Thangaraj-2126564.pdf";
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
            To secure a challenging position as a software developer where I can
            utilize my coding skills and experience in software development to
            contribute to the success of the organization. I am committed to
            continuous learning and professional growth.
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
