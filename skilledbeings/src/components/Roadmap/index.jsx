import React, { useState, useEffect } from "react";
import timelineHorizontal from "../../assets/images/timeline.svg";
import timelineVertical from "../../assets/images/timeline vertical.svg";
import "./styles.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink,
} from "mdb-react-ui-kit";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { width } from "@mui/system";

const Roadmap = () => {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sollicitudin diam, at semper lectus. Curabitur consectetur cursus dapibus. Ut.";
  const [width, setwidth] = useState(0);

  useEffect(() => {
    const Responsive = () => {
      if (window.innerWidth >= 1370 || window.screen.width >= 1370) {
        setwidth(0);
      } else if (window.innerWidth >= 1000 || window.screen.width >= 1000) {
        setwidth(1);
      } else {
        setwidth(2);
      }
    };
    window.addEventListener("resize", Responsive);
    Responsive();
    return () => window.addEventListener("resize", Responsive);
  }, []);

  return (
    <div className="Roadmap">
      <h1 className="head">
        <span>Roadmap</span>
      </h1>

      <div
        className="RoadmapHorizontal"
        style={width === 0 ? { display: "block" } : { display: "none" }}
      >
        <img src={timelineHorizontal} alt="horizontal timeline" />
        <CheckPoint
          title="Title"
          content={content}
          color={"success"}
          count={"1"}
        />
        <CheckPoint
          title="Title"
          content={content}
          color={"danger"}
          count={"2"}
        />
        <CheckPoint
          title="Title"
          content={content}
          color={"info"}
          count={"3"}
        />
        <CheckPoint
          ti
          tle="Title"
          content={content}
          color={"warning"}
          count={"4"}
        />
      </div>

      <div
        className="RoadmapVertical"
        style={width === 1 ? { display: "block" } : { display: "none" }}
      >
        <img src={timelineVertical} alt="vertical timeline" />
        <CheckPoint
          title="Title"
          content={content}
          color={"success"}
          count={"1"}
        />
        <CheckPoint
          title="Title"
          content={content}
          color={"danger"}
          count={"2"}
        />
        <CheckPoint
          title="Title"
          content={content}
          color={"info"}
          count={"3"}
        />
        <CheckPoint
          title="Title"
          content={content}
          color={"warning"}
          count={"4"}
        />
      </div>

      <div
        className="MuiTimeLine"
        style={width === 2 ? { display: "block" } : { display: "none" }}
      >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <CheckPoint
                title="Title"
                content={content}
                color={"success"}
                count={"1"}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <CheckPoint
                title="Title"
                content={content}
                color={"danger"}
                count={"2"}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <CheckPoint
                title="Title"
                content={content}
                color={"info"}
                count={"3"}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <CheckPoint
                title="Title"
                content={content}
                color={"warning"}
                count={"4"}
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

function CheckPoint(props) {
  const classname = "mb-3 " + props.color;
  return (
    <MDBCard border={props.color} className={classname}>
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardSubTitle>Step {props.count} </MDBCardSubTitle>
        <MDBCardText
          style={{
            fontSize: "calc(7px + 0.5vw)",
            overflow: "hidden",
          }}
        >
          {props.content}
        </MDBCardText>
        <MDBCardLink href="#" style={{ fontSize: "calc(7px + 0.5vw)" }}>
          Read more{" "}
        </MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
}
export default Roadmap;
