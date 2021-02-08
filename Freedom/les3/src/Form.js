import React from 'react';
import './index.css';


class Form extends React.Component {
   state = {
      data: {
         number: '0',
         brand: '',
         model: '',
         year: '',
         cost: '',
      }
   };

   updateData = (event) => {
      const { name, value } = event.target;
      this.setState(resState => ({
         ...resState,
         data: {
            ...resState.data,
            [name] : value
         }
      }))
   }

   createClickForm = () => {
      const { data: {brand, model, year, cost } } = this.state;
      this.props.updateChild(brand, model, year, cost)
   }

   render() {
      const { data: { brand, model, year, cost } } = this.state;
      return (
         <>
         <div className='myForm'>
            <form>
               <input name="brand" value={brand} placeholder='brand' onChange={this.updateData} />
               <input name="model" value={model} placeholder='model' onChange={this.updateData} />
               <input name="year" value={year} placeholder='year' onChange={this.updateData} />
               <input name="cost" value={cost} placeholder='cost' onChange={this.updateData} />
            </form>
            <button onClick={this.createClickForm}>Добавить</button>
            
         </div>  
         </>
      );
   }
};

export default Form;
