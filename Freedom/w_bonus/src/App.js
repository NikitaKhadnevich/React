import React from "react";
import { useEffect, useState } from 'react'
import Form from "./Form";


function App() {
  const [dataApp, setDataApp] = useState([])

  const updateChild = (data) => {
    setDataApp([...dataApp, data])
  }

  return (
    <>
    <hr></hr>
    <Form updateChild={updateChild}/>
    {dataApp && dataApp.map((item,i) => {
      return (
        <div className={item.brand+item.model[0].toUpperCase() + item.model.substring(1)} key={dataApp.brand}>
          <p>Название Бренда {item.brand}</p>
          <p>Название Модели {item.model}</p>
        </div>
      )
    })}
    </>
  );
}

export default App;


