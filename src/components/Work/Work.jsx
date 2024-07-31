import React from "react";
import Works from "./Works";
import "./work.css";
const Work = () => {
  return (
    <div>
      <section className="work section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most Recent work</span>
        <Works />
      </section>
    </div>
  );
};

export default Work;
