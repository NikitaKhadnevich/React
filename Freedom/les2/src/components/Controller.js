import { render } from 'react-dom';
import SendBlock from './SendBlok';
import VisualForm from './VisualForm';


class App extends React.Component {
   state = {
      data: {
         name: '',
         email: '',
         pass:''
      }   
   }
}

sendData = () => {
   const {
      data: {
         name,
         email
      }
   } = this.state;
   console.log(name, email);
}

SendBlock()
render() {
   const {
      data: {
         name,
         email
      }
   } = this.state;
   return (
         <>
         <VisualForm />
         </>
   );
}
}

export default App;