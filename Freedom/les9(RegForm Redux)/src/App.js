import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import RegForm from './components/Form/regForm'

class App extends React.Component {

  render() {
    const { names, email, password, secname, birth, telephone } = this.props;



    return (
      <div className='App'>
        <div id='myForm'>
          <form>
              <Form />
              <RegForm />
              <button>Click</button>
          </form>
          
        </div>
        {/* <p>{text}</p>
        <p>{sectext}</p> */}
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => {
  console.log('form', form)
  return {
    names: form.names,
    email: form.email,
    password: form.password,
    secname: form.secname,
    birth: form.birth,
    telephone: form.telephone,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeGlobalStore: (data) => {
//       dispatch({
//         type: 'INCREMENT',
//         payload: data,
//       });
//     },
//   };
// };

export default connect(mapStateToProps)(App);
