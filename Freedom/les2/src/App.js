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
         if(e.target.name == "passw" && e.target.value.length <= 6) {
            console.log('Пароль короткий')
            return count = -1
         }
         if(e.target.name == "passw" && e.target.value.length > 6) {
            console.log('Пароль оптимальный!')
            return count = 1
         }
      }
      Checker()
      let input = document.querySelector('input');
      if (count < 1) {
         input.style.color = 'red'
         input.style.border = '2px'
         input.style.border = 'solid'
         input.style.borderRadius = '2px'
         input.style.opacity = 0.9
      }
      if (count > 0) {
         input.style.color = 'green'
         input.style.border = '2px'
         input.style.border = 'solid'
         input.style.borderRadius = '2px'
         input.style.opacity = 0.9
         
      }
   };

   OneClick = (event) => {
         this.SendData();
         this.VisualForm()
   }

   SendData = () => {
      const { data: { name, email, passw } } = this.state;
   }

   VisualForm = () => {
      const { data: { name, email, passw } } = this.state;
      console.log('Form send')
   return (
      <>
      <div>
         <div>{name}</div>
         <div>{email}</div>
         <div>{passw}</div>
      </div>
      </>
      )
   }

   render() {
      const { data: { name, email, passw } } = this.state;
      return (
         <div>
            <input name="name" value={name} placeholder='name' onChange={this.handleChange} />
            <input name="email" value={email} placeholder='email' onChange={this.handleChange} />
            <input name="passw" value={passw} placeholder='pass' onChange={this.handleChange} />
            <button onClick={this.OneClick}>Click</button>
         </div>
      );
   }
}

export default App;
