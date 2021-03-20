import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_NAME,
  ACTIONS_ADD_TODO,
} from '../../ducks/actionCreators';

class Form extends React.Component {

  handleName = (e) => {
    const { onInputName } = this.props;
    onInputName(e.target.value); //1
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
      </>
    );
  }
}

const mapStateToProps = ({ form, todo }) => ({
  texts: form.names, //5 И тут по итогу мы имеем наш стор
  todo: todo.todo
});

const mapDispatchToProps = (dispatch) => ({
  onInputName: (value) => dispatch(ACTION_ON_INPUT_NAME(value)), //2,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
