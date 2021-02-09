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
      },
      formStyle: {
         brand: '',
         model: '',
         year: '',
         cost: '',
      }
   };

   updateData = (event, valBr, valMo, valYe, valCo) => {
      const { name, value } = event.taget;
      valBr = valBr.length < 1 ? 'emptyField' : 'emptyField'
      valMo = valMo.length < 1 ? 'emptyField' : 'emptyField'
      valYe = valYe.length < 1 ? 'emptyField' : 'emptyField'
      valCo = valCo.length < 1 ? 'emptyField' : 'emptyField'

      const checkBox = (name, value)
      const { name, value } = event.target;
      this.setState(resState => ({
         ...resState,
         data: {
            ...resState.data,
            [name] : value
         }
      }))
   }

   letClear = () => {
      this.setState({ data: { brand: '', model: '', year: '', cost: '' } });
   }

   createClickForm = () => {
      const { data: {brand, model, year, cost } } = this.state;
         this.props.updateChild(brand, model, year, cost)
         this.letClear()
   }

   doAlertClickForm = () => {
      alert('Пожалуйста, заполните все поля')
   }


   render() {
      const { data: { brand, model, year, cost } } = this.state;
      if (brand.length > 0 && model.length > 0 && year.length > 0 && cost.length > 0) {
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
      } else {           
         return (
         <> 
            <div className='myForm'>
                  {cost.length < 1 && <p>Все поля должны быть заполнены</p>}
               <form>
                  <input name="brand" className={brand} value={brand} placeholder='brand' onChange={this.updateData} />
                  <input name="model" value={model} placeholder='model' onChange={this.updateData} />
                  <input name="year" value={year} placeholder='year' onChange={this.updateData} />
                  <input name="cost" value={cost} placeholder='cost' onChange={this.updateData} />
               </form>
                  <button onClick={this.doAlertClickForm}>Добавить</button>
            </div>
         </>
         );
      }
   }
};

export default Form;
