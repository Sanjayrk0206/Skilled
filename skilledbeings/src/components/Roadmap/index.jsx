import React from "react";
import timelineHorizontal from "../../assets/images/timeline.svg"
import "./styles.css";
import imageObj from "../../assets/images/collins-lesulie-QNJo7NRczlU-unsplash.jpg"
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';

const Roadmap = () => {
    return ( 
    <div className="Roadmap">
      <h1 className="head">
        <span>Roadmap</span>
      </h1>
        <div className="RoadmapTiles">
          <img src={timelineHorizontal} alt="timeline" /> 
            <CheckPoint title="title" content="content" image={imageObj} color={"success"} count={"1"}/>
            <CheckPoint title="title" content="content" image={imageObj} color={"danger"} count={"2"}/>
            <CheckPoint title="title" content="content" image={imageObj} color={"info"} count={"3"}/>
            <CheckPoint title="title" content="content" image={imageObj} color={"warning"} count={"4"}/>

        </div>
        
    </div> );
}
 
function CheckPoint(props){
  const classname="mb-3 "+props.color;
    return <MDBCard shadow='0' border={props.color} background='white' className= {classname} style={{ maxWidth: '18rem' }}>
    <MDBCardHeader>Step {props.count} </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>{props.title}</MDBCardTitle>
      <MDBCardText>
        {props.content}
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
  }
export default Roadmap;