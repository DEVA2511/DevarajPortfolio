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
        <img src={AboutImg} alt="Profile Image" className="about_img"></img>
        <div className="about_data">
          <Info />
          <p className="about_description">
            Front end developer, I create web pages with React JS user
            interface, I have one years six month of experience in Java Full
            Stack Developer.
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
