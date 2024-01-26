import React from 'react';
import { useState } from 'react'

const Practice = () => {

  const [heading, setHeading] = useState("Rabsha Shakeel");
  const [title, setTitle] = useState("Reactjs");
  const [check, setCheck] = useState(0);

  return (
    <>
      <div className="card">
        <h1>My name is {heading}</h1>
        <h2>Hello I am here to Rabshaaaaaa {title}</h2>
        <button type="button" onClick={() => setCheck((prevCheck) => prevCheck + 1)}> Introduction {check} </button> 
      </div>
    </>
  )
}

export default Practice
