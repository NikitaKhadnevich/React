import './App.css';
import VisualForm from './components/VisualForm';
import SendBlock from './components/SendBlok';


class App extends React.Component {
   state = {
      data: {
         name: '',
         email: '',
         pass: ''
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
      <VisualForm />
   );
}
}

export default App;