import React from 'react';


const dogArr = ['Akita', 'affenpinscher', 'beagle', 'buhund-norwegian', 'dachshund']
const dogApi = 'https://dog.ceo/api/breed/beagle/images/random';

class Button extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dog: null,
      };
   }

   componentDidMount() {
      fetch(dogApi)
         .then(response => response.json())
         .then(result => this.setState( result )
         )
   }

   render() {
      const { message } = this.state
      return (
         <>
            <img src={message} alt="альтернативный текст" />
            <button>{dogArr[0]}</button>
            <button>{dogArr[1]}</button>
            <button>{dogArr[2]}</button>
            <button>{dogArr[3]}</button>
            <button>{dogArr[4]}</button>
         </>
      )
   }
}






export default Button