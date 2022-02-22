import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle,  MDBRow, MDBCol } from 'mdb-react-ui-kit';

import "./style.css";

export const Sections = () => {
  return <div className="Sections">
    <h1 className='head'><span>Sections</span></h1>
    <MDBRow className='row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4'>
      <MDBCol>
        <Section/>
      </MDBCol>
      <MDBCol>
        <Section/>
      </MDBCol>
      <MDBCol>
        <Section/>
      </MDBCol>
      <MDBCol>
        <Section/>
      </MDBCol>
      <MDBCol>
        <Section/>
      </MDBCol>
      <MDBCol>
        <Section/>
      </MDBCol>
      
    </MDBRow>
  </div>;
};

function Section(props){
  return(
    <div className="section-wrap">
    <MDBCard>
      <MDBCardImage
        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
        alt='...'
        position='top'
      />
      <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>      
    </div>

  );
}

export default Sections;
