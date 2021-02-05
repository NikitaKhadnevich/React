import './App.css';
import React from 'react';
// import visualForm from './visualForm';

class AppCopy extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         data: {
            name: 'ывывыв',
         },
      }
   }

   updateData = (e) => {
      this.setState(prevState => ({
         data: {
               ...prevState.data,
               [e.target.name]: e.target.value
         }
      }));
   }; 
   
   oneClick = (event) => {
      this.props.upDataFRST(this.state.data.name)
   }

   render() {
         return (
         <>
         <div className='myForm'>
            <form>
               <input name="name" value={this.state.data.name} placeholder='name' onChange={this.updateData} />
            </form>
               <button onClick={this.oneClick}>Click</button> 
               {/* По клику запускается РОДИТЕЛЬСКИЙ метод-колбэк и принимает пар-ром стэйт ЧАЙЛД1*/}
         </div> 
         </>
      );
   }
}

export default AppCopy
