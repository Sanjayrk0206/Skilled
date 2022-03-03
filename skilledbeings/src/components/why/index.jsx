import React, { useState, useEffect } from "react";

import "./style.css";
import blue from "../../assets/images/background/undraw_knowledge.svg";
import yellow from "../../assets/images/background/undraw_interview.svg";
import green from "../../assets/images/background/undraw_performance.svg";
import red from "../../assets/images/background/undraw_pie_graph.svg";

const array = [
  {
    id: "blue",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur turpis sed blandit imperdiet.",
  },
  {
    id: "yellow",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur turpis sed blandit imperdiet.",
  },
  {
    id: "red",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur turpis sed blandit imperdiet.",
  },
  {
    id: "green",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur turpis sed blandit imperdiet.",
  },
];

const Why = () => {
  const [degree, setDegree] = useState(0);
  const [ispaused, setisPaused] = useState(false);
  const [vector, setvector] = useState(blue);
  const [color, setcolor] = useState("#1783C1");
  const [title, settitle] = useState("blue");

  useEffect(() => {
    let timer;
    if (!ispaused) {
      timer = setTimeout(() => {
        if (degree === 270) {
          setDegree(0);
        } else {
          setDegree(() => degree + 90);
        }
        if (vector === blue) {
          setvector(yellow);
          setcolor("#F8C300");
          settitle("yellow");
        } else if (vector === yellow) {
          setvector(red);
          setcolor("#DA251D");
          settitle("red");
        } else if (vector === red) {
          setvector(green);
          setcolor("#1DA838");
          settitle("green");
        } else {
          setvector(blue);
          setcolor("#1783C1");
          settitle("blue");
        }
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [degree, ispaused, vector]);

  return (
    <div className="why">
      <div
        className="vectordiv"
        onMouseEnter={() => {
          setisPaused(true);
        }}
        onMouseLeave={() => {
          setisPaused(false);
        }}
      >
        <svg
          className="circle"
          viewBox="0 0 790 790"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "rotate(" + degree + "deg)",
          }}
        >
          <path
            className="intersect in"
            d="M107.668 666.043L118.972 655.005C55.0047 587.12 15.8015 495.64 15.8015 395.003C15.8015 294.344 55.0223 202.845 119.016 134.954L107.706 123.912C40.9333 194.652 -4.04317e-05 290.045 -4.04317e-05 394.998C-4.04317e-05 499.932 40.9175 595.308 107.668 666.043Z"
            fill="#DA251D"
            onClick={() => {
              setDegree(180);
              setvector(red);
              setcolor("#DA251D");
              settitle("red");
            }}
          />
          <path
            className="intersect out"
            d="M666.575 681.832C595.786 748.878 500.195 790 394.999 790C289.643 790 193.92 748.753 123.1 681.526L133.967 670.061C201.956 734.605 293.853 774.206 395 774.206C495.986 774.206 587.753 734.731 655.709 670.369L666.575 681.832Z"
            fill="#1DA838"
            onClick={() => {
              setDegree(270);
              setvector(green);
              setcolor("#1DA838");
              settitle("green");
            }}
          />
          <path
            className="intersect out"
            d="M680.163 121.672L668.756 132.607C734.068 200.728 774.201 293.178 774.201 395.002C774.201 496.826 734.068 589.276 668.756 657.398L680.159 668.328C748.193 597.368 790 501.065 790 394.998C790 288.933 748.195 192.631 680.163 121.672Z"
            fill="#1783C1"
            onClick={() => {
              setDegree(0);
              setvector(blue);
              setcolor("#1783C1");
              settitle("blue");
            }}
          />
          <path
            className="intersect in"
            d="M133.983 119.935C201.971 55.3988 293.863 15.8028 395.003 15.8028C495.989 15.8028 587.755 55.2786 655.712 119.641L666.582 108.173C595.793 41.1239 500.2 0 395.001 0C289.65 0 193.931 41.2435 123.111 108.465L133.983 119.935Z"
            fill="#F8C300"
            onClick={() => {
              setDegree(90);
              setvector(yellow);
              setcolor("#F8C300");
              settitle("yellow");
            }}
          />
        </svg>
        <div
          className="vector"
          style={{
            backgroundImage: "url(" + vector + ")",
          }}
        ></div>
      </div>
      <div className="content">
        <div
          className="box"
          style={{ backgroundColor: color }}
          onMouseEnter={() => {
            setisPaused(true);
          }}
          onMouseLeave={() => {
            setisPaused(false);
          }}
        >
          <h1>Why career guidance is required - {title}</h1>
          <p>{array.find((content) => content.id === title).content}</p>
          <a href="#">Know more {">>"}</a>
        </div>
      </div>
    </div>
  );
};

export default Why;
