import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_CHANGE,
  ACTION_ON_SELECT,
} from '../../ducks/actionCreators';

class Form extends React.Component {
  handleChange = (e) => {
    const { onInputChange } = this.props;

    onInputChange(e.target.value);
  };

  handleCheckboxChange = (e) => {
    const { onCheckBoxChange } = this.props;

    onCheckBoxChange(e.target.checked);
  };

  render() {
    const { checked, text } = this.props;

    return (
      <form>
        <input value={text} onChange={this.handleChange} />
        <input
          type='checkbox'
          checked={checked}
          onChange={this.handleCheckboxChange}
        />
      </form>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  text: form.text,
  checked: form.checkbox,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (value) => dispatch(ACTION_ON_INPUT_CHANGE(value)),
  onCheckBoxChange: (selected) => dispatch(ACTION_ON_SELECT(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
