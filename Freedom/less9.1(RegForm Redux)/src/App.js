import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import RegForm from './components/Form/regForm'
import Result from './components/Form/result'

import {
  ACTION_ON_INPUT_RENDER, 
  ACTION_ON_COUNTER
} from './ducks/actionCreators';

class App extends React.Component {

  addData = (e) => {
    e.preventDefault()
    const { inputRender, inputCall } = this.props
    inputRender(!inputCall)
  };

  addCounter = (e) => {
    e.preventDefault()
    const { addCount } = this.props
    addCount(1)
  }

  render() {
    const { inputCall, counter , names, email, password, secname, birth, telephone} = this.props;
    console.log(`counter`, counter)
    return (
      <div className='App'>
        <div id='myForm'>
          <form>
              <Form />
              <RegForm />
              <button onClick={this.addData}>Click</button>
              {inputCall && names && email && password && secname && birth && telephone
              ? <Result /> : null}
          </form>
          <button onClick={this.addCounter}>Counter</button>
          {counter > 0 ? <p>{counter}</p> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return {
    names: form.names, email: form.email,
    password: form.password, secname: form.secname,
    birth: form.birth, telephone: form.telephone,
    inputCall: form.inputCall, counter: form.counter
  };
};

const mapDispatchToProps = (dispatch) => ({
  inputRender: (value) => dispatch(ACTION_ON_INPUT_RENDER(value)),
  addCount: (value) => dispatch(
    ACTION_ON_COUNTER(value)
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
