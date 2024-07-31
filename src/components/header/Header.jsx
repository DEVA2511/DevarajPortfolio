import React, { useState } from "react";
// import "../../App.css";
import "./header.css";
// import { ThemeProvider } from "../DarkAndLight/ThemeContext";

// import DarkModeToggle from "../DarkAndLight/ThemeContext";
// import ThemeToggle from "../DarkAndLight/ThemeContext";

const Header = ({ onClick }) => {
  // Scroll down the background color change
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  // React hooks are used here..
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  // Active Nav
  const [activeNav, setActiveNav] = useState("@home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          DEVARAJ
        </a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-home nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user nav_icon"></i>User
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#service"
                className={
                  activeNav === "#service" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#service")}
              >
                <i className="uil uil-brefcase-alt nav_icon"></i>Services
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#qualification"
                className={
                  activeNav === "#qualification"
                    ? "nav_link active-link"
                    : "nav_link"
                }
                onClick={() => setActiveNav("#qualification")}
              >
                <i className="uil uil-scenery nav_icon"></i>Qualification
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav_link active-link"
                    : "nav_link"
                }
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav_icon"></i>Protfolio
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }
                onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
            {/* <li className="nav_item">
              {/* <ThemeToggle /> */}
            {/* <button onClick={onClick}>Theme</button>
            </li> */}
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
