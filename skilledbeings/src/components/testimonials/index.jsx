import React from 'react';
import './style.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import image from "../../assets/images/collins-lesulie-QNJo7NRczlU-unsplash.jpg"

export default function Testimonials() {
  return (
    <div className="testimonials">
    <h1 className='head'><span>Testimonials</span></h1>
    <MDBRow className='row-cols-1 row-cols-md-2 g-4 w'>
      <MDBCol>
        <Testimonial/>
      </MDBCol>
      <MDBCol>
        <Testimonial/>
      </MDBCol>
      <MDBCol>
        <Testimonial />
      </MDBCol>
      <MDBCol>
        <Testimonial />
      </MDBCol>
    </MDBRow>
    </div>
    
  );
}

function Testimonial(props){
  return <MDBCard style={{ maxWidth: '540px' }} className='a'>
  <MDBRow className='g-0 b' >
    <MDBCol md='4' className='c'>
      <MDBCardImage src={image} alt='...' fluid />
    </MDBCol>
    <MDBCol md='8'>
      <MDBCardBody>
        <MDBCardTitle>Name</MDBCardTitle>
        <MDBCardText>
          <small className='text-muted'>CEO, some company</small>
        </MDBCardText>
        <MDBCardText >
          "This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer."
        </MDBCardText>

      </MDBCardBody>
    </MDBCol>
  </MDBRow>
</MDBCard>
}