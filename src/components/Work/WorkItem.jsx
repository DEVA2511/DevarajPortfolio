import React from "react";
import "./work.css";
const WorkItem = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="Work_image" className="work_img" />
      <h3 className="work_titel">{item.title}</h3>
      <a href="Hello" className="work_button">
        Demo <i className="bx bx-right-arrow-alt wrok_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItem;
