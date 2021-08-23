import React from "react";
import { useEffect, useState } from 'react'


function Form(props) {
  const [data, setData] = useState({
    brand:'',
    model:'',
  })

  const grabData = (e) => {
    e.preventDefault()
    setData(
      {
        ...data,
        [e.target.name]: e.target.value
      }
    )
  }
  
  const createClickForm = (e) => {
    e.preventDefault();
    props.updateChild(data)
  }
  
  return (
    <form onSubmit={createClickForm}>
      <input type='text' name='brand' value={data.brand} placeholder='Camera Brand' onChange={grabData}></input>
      <input type='text' name='model' value={data.model} placeholder='Model' onChange={grabData}></input>
      <button>Send data</button>
    </form>
  );
}

export default Form;
