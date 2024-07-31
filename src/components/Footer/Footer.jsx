import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Devaraj</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a href="@Myinsta id" className="footer_social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#Facebook Id" className="footer_social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="Git id" className="footer_social-link" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <div className="footer_copy">&#169; Devaraj. All rigths reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
