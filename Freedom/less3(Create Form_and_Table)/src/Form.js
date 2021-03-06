import React from 'react';
import './index.css';


class Form extends React.Component {
   state = {
      data: {
         brand: '',
         model: '',
         year: '',
         cost: '',
      },
      formStyle: {
         // sbrand: '',
         // smodel: '',
         // syear: '',
         // scost: '',
      }
   };

   checkBox = (name,value,field) => {
      this.setState(prevState => ({
         ...prevState,
         data: {
            ...prevState.data,
            [name]: value
         },
         formStyle: {
            ...prevState.formStyle,
            [name]: field,
         }
      }))
   }

   updateData = (event) => {
      const { name, value } = event.target;
      const brandAlert = 
      value.length < 3 ? 'emptyField' :
      value.length < 15 ? 'fullField' : 'fullField' 

      const modelAlert = 
      value.length < 1 ? 'emptyField' :
      value.length > 15 ? 'fullField' : 'fullField'
      
      const modelYear =
      value.length == 4 && value.replace(/[^0-9]/g, '').length == 4 ? 'fullField' :
      value.length !== 4 && value.replace(/[^0-9]/g, '').length !== 4 ?  'emptyField' : 'emptyField'

      const modelCost =
         value.length > 0 && value.replace(/[^0-9]/g, '').length == value.length ? 'fullField' : 'emptyField'

      if (name === 'brand') {
         this.checkBox(event.target.name, event.target.value, brandAlert)
      }
      if (name === 'model') {
         this.checkBox(event.target.name, event.target.value, modelAlert)
      }
      if (name === 'year') {
         this.checkBox(event.target.name, event.target.value, modelYear)
      }
      if (name === 'cost') {
         this.checkBox(event.target.name, event.target.value, modelCost)
      }
   }

   letClear = () => {
      this.setState(prev => ({
         ...prev, 
         data: { brand: '', model: '', year: '', cost: ''
         },
         formStyle: { brand: '', model: '', year: '', cost: ''
         }
      }))
   }

   createClickForm = () => {
      const { data: {brand, model, year, cost } } = this.state;
         this.props.updateChild(brand, model, year, cost) // Вызываю функ-колбэк родителя для передачи стэйта
         this.letClear()
   }

   doAlertClickForm = () => {
      alert('Пожалуйста, заполните корректно все поля')
   }

   render() {
      const { data: { brand, model, year, cost } } = this.state;
      if (this.state.formStyle.brand === 'fullField' &&
         this.state.formStyle.model === 'fullField' &&
         this.state.formStyle.year === 'fullField' &&
         this.state.formStyle.cost === 'fullField') {
      return (
         <>
            <div className='myForm'>
               <form>
                  <input name="brand" className={this.state.formStyle.brand} value={brand} placeholder='brand' onChange={this.updateData} />
                  {this.state.formStyle.brand === 'emptyField' && <p>Название мдели должно быть длиннее 3</p>}

                  <input name="model" className={this.state.formStyle.model} value={model} placeholder='model' onChange={this.updateData} />
                  {this.state.formStyle.model === 'emptyField' && <p>Заполните поле</p>}

                  <input name="year" className={this.state.formStyle.year} value={year} placeholder='year' onChange={this.updateData} />
                  {this.state.formStyle.year === 'emptyField' && <p>Дата должна быть формата: '1488'</p>}

                  <input name="cost" className={this.state.formStyle.cost}value={cost} placeholder='cost' onChange={this.updateData} />
                  {this.state.formStyle.cost === 'emptyField' && <p>Введите корректное число</p>}
               </form>
               <button onClick={this.createClickForm}>Добавить</button>
            </div>  
         </>
      );
      } else {           
         return (
         <> 
            <div className='myForm'>
               <form>
                  <input name="brand" className={this.state.formStyle.brand} value={brand} placeholder='brand' onChange={this.updateData} />
                  {this.state.formStyle.brand === 'emptyField' && <p>Название мдели должно быть длиннее 3</p>}

                  <input name="model" className={this.state.formStyle.model} value={model} placeholder='model' onChange={this.updateData} />
                  {this.state.formStyle.model === 'emptyField' && <p>Заполните поле</p>}

                  <input name="year" className={this.state.formStyle.year} value={year} placeholder='year' onChange={this.updateData} />
                  {this.state.formStyle.year === 'emptyField' && <p>Дата должна быть формата: '1488'</p>}

                  <input name="cost" className={this.state.formStyle.cost} value={cost} placeholder='cost' onChange={this.updateData} />
                  {this.state.formStyle.cost === 'emptyField' && <p>Введите корректное число</p>}
               </form>
                  <button onClick={this.doAlertClickForm}>Добавить</button>
            </div>
         </>
         );
      }
   }
};

export default Form;
