import React from 'react';

import "./style.css";
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import photo from "../../assets/images/dwayne-the-rock-.jpg";

export const Testimonial = () => {
  return <div className='testimonial'>
    <div className='head'>
        <Avatar
            alt="Remy Sharp"
            src={photo}
            sx={{ width: 120, height: 120 }}
            />
        </div>
    <div className='grid'>
    <Fab size="small" aria-label="left">
        <ChevronLeft />
      </Fab>
      <div className='chatcontainer'>
        <div  className='content'>
            <h2>Sagarika Sharma, Founder & CEO - Taabeer Mentorship Program</h2>
            <p>
            10th grade is an extremely crucial year in the academic timeline of a student in the Indian education system. That is a time when comprehensive directed guidance plays a mammoth role in shaping the career tangent of child. The students of Taabeer Mentorship Program were also at the the same place. ProBano played an extremely important role in providing the students with the required guidance. They provided each kid with clarity regarding themselves, their interests, their aptitude. This immensely helped the students in choosing their streams in their 11th grade and their way forward in their careers. They supported each kid with extensive career awareness programs, career guidance sessions and individual sessions. The students have gained immense clarity post the program. Most of the students have said how they were confused and lost before the session and after the program they have incredible clarity about their career forward. They now know about new careers now, new clarity now and are guided well from ProBano with dedicated individual counseling. I would definitely recommend this to all schools and NGOs who have kids in the need of career guidance. 
            </p>
        </div>
      </div>
      <Fab size="small" aria-label="right">
        <ChevronRight />
      </Fab>
    </div>
  </div>;
};

export default Testimonial;
