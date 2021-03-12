import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_NAME,
  ACTIONS_ADD_TODO,
} from '../../ducks/actionCreators';

class Form extends React.Component {

  handleName = (e) => {
    const { onInputName } = this.props;
    onInputName(e.target.value);
  };

  addToDo = (e) => {
    const { onClickADD, texts } = this.props
    onClickADD(texts)
    e.preventDefault()
    console.log('todo', texts)
  }

  render() {
    const { names } = this.props;

    return (
      <>
          <input placeholder="Enter Name"  value={names} onChange={this.handleName} />
          <button onClick={this.addToDo}>Add Todo</button>
      </>
    );
  }
}

const mapStateToProps = ({ form, todo }) => ({
  texts: form.names,
  todo: todo.todo
});

const mapDispatchToProps = (dispatch) => ({
  onInputName: (value) => dispatch(ACTION_ON_INPUT_NAME(value)),
  onClickADD: (value) => dispatch(ACTIONS_ADD_TODO(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
