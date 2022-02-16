import React from 'react'

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
  ]

  return (
    <div className='Achievement'>
        {
          list.map((data, index) => <Circle index={index} title={data.title} content={data.content}/>)
        }
    </div>
  )
}

function Circle(props, index) {
  return <div className='outercircle' key={index}>
  <div className='innercircle'>
    <div>
      <h1 className='title'>{props.title}</h1>
      <p className='content'>{props.content}</p>
    </div>
  </div>
</div>;
}

export default Achievement