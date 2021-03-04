import '../App.css';
import React, { Component } from 'react'
import Form from './HocAtLesson/Form'
import AccumData from './FetchHOC/AccumData'
import FormHOCApp from './FormHOC/FormHOCApp'

class App extends Component {

  render() {
    return (
      <div>
        {/* <AccumData /> */}
        <FormHOCApp />
        {/* <Form /> */}
      </div>
    )
  } 
}

export default App