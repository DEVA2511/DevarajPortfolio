import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel jurny</span>

      <div className="qualification_container container grid">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Computer science and engginering
                </h3>
                <apan className="qualification_subtitle">
                  National Engginering college, kovilpatti
                </apan>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div> */}

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">JR. Software Engineer</h3>
                <span className="qualification_subtitle">
                  Cognizant technology and private limited
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>
              </div>
            </div>

            {/* Softwate Trinee */}
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Software Engineer Trinee
                </h3>
                <span className="qualification_subtitle">
                  Cognizant technology and private limited
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>27th-Jan-2023 -
                  30-June-2023
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Computer science and engginering
                </h3>
                <span className="qualification_subtitle">
                  National Engginering college, kovilpatti
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">12th</h3>
                <span className="qualification_subtitle">
                  Goverment Boys Higher Secdary School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2016 - 2018
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">10th</h3>
                <span className="qualification_subtitle">
                  Govermnet High School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2015 - 2016
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
