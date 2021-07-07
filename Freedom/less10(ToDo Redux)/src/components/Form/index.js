import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_NAME,
} from '../../ducks/actionCreators';

class Form extends React.Component {

  handleName = (e) => {
    const { onInputName } = this.props;
    onInputName(e.target.value);
  };

  render() {
    const { names } = this.props;

    return (
      <>
          <input id='firstTodo' placeholder="Enter Name"  value={names} onChange={this.handleName} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
