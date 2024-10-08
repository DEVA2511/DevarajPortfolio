import React from "react";
// import "./Skills.css";
const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Front End Developer</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">JavaScripte</h3>
              <span className="skills_level">Intermidiate</span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">React JS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name"></h3>
              <span className="skills_level"></span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
