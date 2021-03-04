import React from 'react';
import { connect } from 'react-redux';
import {
   ADD_TODO,
   EDIT_TODO,
   DELETE_TODO,
} from '../../ducks/todos';

class Todo extends React.Component {
  handleChange = (e) => {
    const { onInputChange } = this.props;
    onInputChange(e.target.value);
  };

  render() {
    const { text } = this.props;

    return (
      <div>
        <input value={text} onChange={this.handleChange} />
        <div>{text}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({
  text: todo.text,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (value) => dispatch(ADD_TODO(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
