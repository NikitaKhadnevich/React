
export const addToDo = (e) => {
   const { onClickADD, names } = this.props
   onClickADD(names)
   e.preventDefault()
}

export const delTodo = (e) => {
   e.preventDefault()
   const { onClickDEL } = props
   onClickDEL()
}

const mapStateToProps = ({ todo }) => ({
   todo: todo.todo,
   text: form.names,
 });


const mapDispatchToProps = (dispatch) => ({
   onInputName: (value) => dispatch(ACTION_ON_INPUT_NAME(value)),
   onClickADD: (value) => dispatch(ACTIONS_ADD_TODO(value)),
   onClickDEL: (value) => dispatch(ACTION_DELETE_TODO(value)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(Todoindex);