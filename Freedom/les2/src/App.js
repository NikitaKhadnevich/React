import './App.css';
import React from 'react';
// import VisualForm from './VisualForm';
import { InputStatus , TrueForm} from './StyleForm'

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
      let frstChild = input.firstChild.style
      let lastChild = input.lastChild.style
      let secondChild = document.getElementsByTagName('input')[1].style;

      if(e.target.name == 'name' && (name.length < 3 || name.length > 20)) {
         InputStatus(frstChild, '#ff63478a', 0.8)
      } else {
         InputStatus(frstChild, '#74bfa199', 1)
      }

      if(e.target.name == 'email' && email.includes('@') == false) {
         InputStatus(secondChild , '#ff63478a', 0.8)
      } else {
         InputStatus(secondChild , '#74bfa199', 1)
      }

      if(e.target.name == 'passw' && passw.length <= 6) {
         InputStatus(lastChild, '#ff63478a', 0.8)
      }else {
         InputStatus(lastChild, '#74bfa199', 1)
      } 
   }

   UpdateData = (e) => {
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
      let visForm = document.querySelector('.renderForm').style;
      if (passw.length > 6 &&
         email.includes('@') == true &&
         (name.length > 3 && name.length < 20))
         {
         let hidepass = passw.slice(0, -5) + '*****'
         this.setState({
            formName: `Имя: ${name}`,
            formEmail: `Почта: ${email}`,
            formPassw: `Пароль: ${hidepass}`
         })
         TrueForm(visForm, '#74bfa199')
         
      } else {
         this.setState({
            formName: `Имя не соответствует необходимой длинне или`,
            formEmail: `Адрес почты не содержит '@' или `,
            formPassw: `Пароль не валидный!!!`
         })
         let visForm = document.querySelector('.renderForm').style;
         TrueForm(visForm, '#ff63478a')
      }
   }

   render() {
      const { data: { name, email, passw } } = this.state;
      return (
         <>
         <div className='myForm'>
            <form>
               <input name="name" value={name} placeholder='name' onChange={this.UpdateData} />
               <input name="email" value={email} placeholder='email' onChange={this.UpdateData} />
               <input name="passw" value={passw} placeholder='pass' onChange={this.UpdateData} />
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
