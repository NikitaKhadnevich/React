import React from 'react';
import { connect } from 'react-redux';
import Todo from './components/Todo/Todo;'

class App extends React.Component {

  render() {
    const { counter, text } = this.props;

    return (
      <div className='Todo'>
        <Todo />
      </div>
    );
  }
}

const mapStateToProps = ({ counter, todo }) => {
  return {
    counter: counter.counter,
    text: todo.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeGlobalStore: (data) => {
      dispatch({
        type: 'INCREMENT',
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
