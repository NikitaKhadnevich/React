import './App.css';
import React from 'react';
import { Truef, Wrong, TrueForm} from './StyleForm'

class App extends React.Component {
   state = {
      data: {
         name: '',
         email: '',
         passw: ''
      }
   };

   Checker = (e) => {
      const { data: { name, email, passw } } = this.state;
      let input = document.querySelector('form');
      let checkStyle = input.lastChild.style
      if(e.target.name == 'passw' && passw.length <= 6) {
         Wrong(checkStyle)
      }

      if(e.target.name == 'passw' && passw.length > 6) {
         Truef(checkStyle)
      } 
   }

   handleChange = (e) => {
      this.setState(prevState => ({
         data: {
               ...prevState.data,
               [e.target.name]: e.target.value
         }
      }));
      this.Checker(e)
   };

   OneClick = (event) => {
         this.VisualForm()
   }

   VisualForm = () => {
      const { data: { name, email, passw } } = this.state;
      let button = document.querySelector('button')
      if (passw.length > 6 &&
         passw) {
         let hidepass = passw.slice(0, -5) + '*****'
         this.setState({
            formName: `Имя: ${name}`,
            formEmail: `Почта: ${email}`,
            formPassw: `Пароль: ${hidepass}`
         })
         let visForm = document.querySelector('.renderForm');
         let visFormStyle = visForm.style
         TrueForm(visFormStyle, '#74bfa199')
      } else {
         this.setState({
            formName: ``,
            formEmail: `Пароль не валидный!!!`,
            formPassw: ``
         })
         let visForm = document.querySelector('.renderForm');
         let visFormStyle = visForm.style
         TrueForm(visFormStyle, '#ff63478a')
      }
   }

   render() {
      const { data: { name, email, passw } } = this.state;
      return (
         <>
         <div className='myForm'>
            <form>
               <input name="name" value={name} placeholder='name' onChange={this.handleChange} />
               <input name="email" value={email} placeholder='email' onChange={this.handleChange} />
               <input name="passw" value={passw} placeholder='pass' onChange={this.handleChange} />
            </form>
               <button onClick={this.OneClick}>Click</button>
         </div>  
         <div className='renderForm'>
            <p>{this.state.formName}</p>
            <p>{this.state.formEmail}</p>
            <p>{this.state.formPassw}</p>
         </div>
         </>
      );
   }
}

export default App;
