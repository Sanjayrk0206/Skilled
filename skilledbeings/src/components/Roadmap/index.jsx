import React from "react";
import timelineHorizontal from "../../assets/images/timeline.svg"
import timelineVertical from "../../assets/images/timeline vertical.svg"
import "./styles.css";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Roadmap = () => {
    const content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sollicitudin diam, at semper lectus. Curabitur consectetur cursus dapibus. Ut."
    return ( 
    <div className="Roadmap">
      
      <h1 className="head">
        <span>Roadmap</span>
      </h1>

      <div className="RoadmapHorizontal">
          <img src={timelineHorizontal} alt="horizontal timeline" /> 
            <CheckPoint title="Title" content={content}  color={"success"} count={"1"}/>
            <CheckPoint title="Title" content={content}  color={"danger"} count={"2"}/>
            <CheckPoint title="Title" content={content}  color={"info"} count={"3"}/>
            <CheckPoint ti tle="Title" content={content}  color={"warning"} count={"4"}/>
        </div>
      
        <div className="RoadmapVertical">
          <img src={timelineVertical} alt="vertical timeline"/>
            <CheckPoint title="Title" content={content}  color={"success"} count={"1"}/>
            <CheckPoint title="Title" content={content}  color={"danger"} count={"2"}/>
            <CheckPoint title="Title" content={content}  color={"info"} count={"3"}/>
            <CheckPoint title="Title" content={content}  color={"warning"} count={"4"}/>
        </div>

       <div className="MuiTimeLine">
       <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <CheckPoint title="Title" content={content}  color={"success"} count={"1"}/>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot  />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <CheckPoint title="Title" content={content}  color={"danger"} count={"2"}/>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot  />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <CheckPoint title="Title" content={content}  color={"info"} count={"3"}/>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot  />
          </TimelineSeparator>
          <TimelineContent>
            <CheckPoint title="Title" content={content}  color={"warning"} count={"4"}/>
          </TimelineContent>
        </TimelineItem>
     
      </Timeline> 
      </div> 
    </div> );
}
 
function CheckPoint(props){
  const classname="mb-3 "+props.color;
  /*
    return <MDBCard shadow='0' border={props.color} background='white' className= {classname} style={{ maxWidth: '18rem' }}>
    <MDBCardHeader>Step {props.count} </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>{props.title}</MDBCardTitle>
      <MDBCardText>
        {props.content}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  */
 return (
<MDBCard border={props.color} className={classname}>
  <MDBCardBody>
    <MDBCardTitle>{props.title}</MDBCardTitle>
    <MDBCardSubTitle>Step {props.count} </MDBCardSubTitle>
    <MDBCardText>
     {props.content}
    </MDBCardText>
    <MDBCardLink href='#'>Read more </MDBCardLink>
  </MDBCardBody>
</MDBCard> 
 )
  }
export default Roadmap;