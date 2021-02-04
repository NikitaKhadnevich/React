import React from 'react';


class Ch1 extends React.Component {
   state = {
      data: {
         name: '',
         email: '',
      }
   };

   updateData = (props) => {
      const { data: { name, email } } = this.state;
      return (
         <div>
            <p>name={props.this.state.name}</p>
            <p>email={props.this.state.email}</p>
         </div>
      )
   }

   render() {
      const { data: { name, email } } = this.state;
      return (
         <>
         <div className='myForm'>
            <form>
               <input name="name" value={name} placeholder='name' onChange={this.updateData} />
               <input name="email" value={email} placeholder='email' onChange={this.updateData} />
            </form>
         </div>  
         </>
      );
   }
};

export default Ch1;
