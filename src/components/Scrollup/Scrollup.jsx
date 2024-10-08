import React from "react";
import "./scrollup.css";
const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    if (this.scrollY >= 400) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uill uil-arrow-up scrollup_icon"></i>
    </a>
  );
};
export default Scrollup;
