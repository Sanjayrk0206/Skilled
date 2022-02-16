import React,{ Component } from 'react';
import Slider from 'react-slick';

import "./style.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../../assets/images/mbbs-in-uk.webp";

const list = [
  {
    Image: Image,
    Head: "MBBS in UK: Be A Brit Medic",
    Content: "Ready to be a medic? Do we hear you say ‘not in India’? Are you",
  },
  {
    Image: Image,
    Head: "MBBS in UK: Be A Brit Medic",
    Content: "Ready to be a medic? Do we hear you say ‘not in India’? Are you",
  },
  {
    Image: Image,
    Head: "MBBS in UK: Be A Brit Medic",
    Content: "Ready to be a medic? Do we hear you say ‘not in India’? Are you",
  },
  {
    Image: Image,
    Head: "MBBS in UK: Be A Brit Medic",
    Content: "Ready to be a medic? Do we hear you say ‘not in India’? Are you",
  },
];

export default class Blog extends Component {
  render() {
  const settings = {
    className: "slider",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return <div className='blog'>
    <h1 className='head'><span>Blogs</span></h1>
    <div className='content'>
      <Slider {...settings}>
      {
        list.map((card, index) =>  <div className='ccard' key={index}><Blogcard Image={card.Image} Head={card.Head} Content={card.Content}/></div>)
      }
      </Slider>
    </div>
  </div>;
  }
};

function Blogcard(props) {
  return <Card style={{ width: "fit-content" }}>
  <CardActionArea sx={{ width: 300, height: 400 }}>
    <CardMedia
      component="img"
      height="170"
      image={props.Image}
      alt="MBBS IN UK"
    />
    <CardContent className='cardcontent'>
      <Typography gutterBottom variant="h6" component="div" align='center' className='cardhead'>
        {props.Head}
      </Typography>
      <Typography variant="body2" color="text.secondary" align='center' className='cardbody'>
        {props.Content}
        <span className='cardreadmore'>Read More {'>>'}</span>
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
}
