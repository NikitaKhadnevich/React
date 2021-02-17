import React, { Component } from 'react'


export default class TableRender extends Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }



   render() {
      const { table } = this.props
      return (
         <div className='Block'>
            {table.map((item, index) => {
            return (
               <div className={item}>
               </div>   
         )})}
         </div>
      )
   }
}
