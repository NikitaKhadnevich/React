import './App.css';
import React from 'react';


class App extends React.Component {
   state = {
      data: {
         name: '',
         email: '',
         passw: ''
      }
   };

   handleChange = (e) => {
      this.setState(prevState => ({
         data: {
               ...prevState.data,
               [e.target.name]: e.target.value
         }
      }));

      let count = 0  
      const Checker = () => {
         let input = document.querySelector('form');
         let checkStyle = input.lastChild.style
         if(e.target.name == "passw" && e.target.value.length <= 6) {
            checkStyle.color = 'red'
            checkStyle.border = '2px'
            checkStyle.border = 'solid'
            checkStyle.borderRadius = '2px'
            checkStyle.opacity = 0.9;
            checkStyle.outline = 'none'
            console.log('Пароль короткий')
            return count = -1
         }
         if(e.target.name == "passw" && e.target.value.length > 6) {
            console.log('Пароль оптимальный!')
            checkStyle.color = 'green'
            checkStyle.border = '2px'
            checkStyle.border = 'solid'
            checkStyle.borderRadius = '2px'
            checkStyle.opacity = 0.9
            checkStyle.outline = 'none'
            return count = 1
         } else {
            checkStyle.color = ''
            checkStyle.border = ''
            checkStyle.border = ''
            checkStyle.borderRadius = ''
            checkStyle.opacity = 1
         }
      }
      Checker()
   };

   OneClick = (event) => {
         this.SendData();
         this.VisualForm()
   }

   SendData = () => {
      const { data: { name, email, passw } } = this.state;
   }

   VisualForm = () => {
      console.log('Form send')
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
         </>
      );
   }
}

export default App;
