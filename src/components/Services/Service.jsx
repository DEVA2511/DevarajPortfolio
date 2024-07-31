import React, { useState } from "react";
import "./Services.css";
const Service = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="service">
      <h2 className="section_title">Service</h2>
      <span className="section_subtitle">What i offer</span>
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Java Developer</h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                className="uil uil-times services_model-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_model-title">Java Developer</h3>
              <p className="services_model-description">
                Service with one year of experience. Providing quvality work to
                clients and companies.
              </p>
              <ul className="services_model-services grid">
                {/* <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">
                    I Developed user interface.
                  </p>
                </li> */}
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">
                    Developed Web application
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">Java Based application</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">Web Developer</h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Web Developer</h3>
              <p className="services_model-description">
                Service with one year of experience. Providing quvality work to
                clients and companies.
              </p>
              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">
                    I Developed user interface.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">
                    Developed Web application
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">Java Based application</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Full stack Developer</h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Full Stack Developer</h3>
              <p className="services_model-description">
                Service with one year of experience. Providing quvality work to
                clients and companies.
              </p>
              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">
                    I Developed user interface.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">
                    Developed Web application
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="service_model-info">Java Based application</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
