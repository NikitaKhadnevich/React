import React from 'react';
import './index.css';

class Table extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         carObj: 
            {  
               Cbrand: this.props.brand,
               Cmodel: this.props.model,
               Cyear: this.props.year,
               Ccost: this.props.cost
            },
         carArr: [],
      }
   }

   static getDerivedStateFromProps(props, state) {
      return({
         carObj: 
         {  
            Cbrand: props.brand,
            Cmodel: props.model,
            Cyear: props.year,
            Ccost: props.cost
         },
      })
   }

   createAccum = () => {
      const carObj = this.state.carObj;
      const carArr = this.state.carArr;
      carArr.push(carObj);
      this.setState(
         carArr
         )
   }
   
   createClickTable = () => {
      this.createAccum()
   }

   //Сначала происходит рендер в результате чего появляется кнопка//
   
   render() {
      return (
         <>
            <div className='wrappertable'>
               <table className="table">
                  <thead>
                     <tr>
                        <th>Number</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Cost</th>
                     </tr>
                  </thead>
                  {this.state.carArr.map((item, index) => {
                  return (<tbody>
                     <tr>
                        <td cla>{++index}</td>
                        <td>{item.Cbrand}</td>
                        <td>{item.Cmodel}</td>
                        <td>{item.Cyear}</td>
                        <td>{item.Ccost}</td>
                        <td id='delete' data-num={index}>X</td>
                     </tr>
                  </tbody>)})}
               </table>
               <button onClick={this.createClickTable}>Update</button>    
            </div>    
         </>
      )
   }
}

export default Table;
