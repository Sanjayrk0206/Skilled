import React from "react";
import CountUp from "react-countup";

import "./style.css";

const Achievement = () => {
  const list = [
    {
      title: "520",
      content: "Student Consulted",
    },
    {
      title: "20",
      content: "Student Consulted",
    },
    {
      title: "10",
      content: "Student Consulted",
    },
    {
      title: "2",
      content: "Student Consulted",
    },
  ];

  return (
    <div className="Achievement">
      {list.map((data, index) => (
        <Circle key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
};

function Circle(props) {
  return (
    <div className="outercircle">
      <div className="innercircle">
        <div>
          <CountUp end={props.title} className="title" />
          <p className="content">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
