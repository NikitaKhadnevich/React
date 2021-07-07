import React from 'react';

const RoneHOC = (Component) => { // 2. Передаем компонент
   return class extends React.Component {
      state = {
         data: {
            names: this.props.data,
            email: this.props.data,
            pass: this.props.data,
            secName: null,
            birth: null,
            numb: null
         }
      }

   handlesecondName = (e) => {
      const { name, value } = e.target;
      const { data: { names, email, pass } } = this.state
      this.setState( prevState => ({
         ...prevState,
         data: {
            ...prevState.data,
            [name]: value
         }
         
         })
      )  
   }

   render() {
      const { data } = this.state
      console.log('data', data) // А ниже он уже рндерется в верстку
      return (
         <>
         <div className='myForm'>  
               <form> 
                  <> 
                     <Component data={data} {...this.props} /> 
                     <h4>Registration</h4>
                     <input id='cheker'type="checkbox" name="option1" value="a2"/>
                     <input type="text" placeholder="Enter Second Name" name="secName" onChange={this.handlesecondName}/>
                     <input type="text" placeholder="Enter Birh Year" name="birth" onChange={this.handlesecondName}/>
                     <input type="text" placeholder="Enter Number" name="numb" onChange={this.handlesecondName}/>
                     <button>Register</button>
                  </>
               </form>
            </div>
         </>
      )
   }   
   }
}
export default RoneHOC 