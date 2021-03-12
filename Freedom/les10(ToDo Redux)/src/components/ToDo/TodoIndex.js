import React from 'react';
import { connect } from 'react-redux';

import {
  ACTIONS_ADD_TODO,
  ACTION_EDIT_TODO,
  ACTION_DELETE_TODO
} from '../../ducks/actionCreators';

const Todoindex = (props) => {

    const { todo } = props;

    const delTodo = (e) => {
      e.preventDefault()
      const { onClickDEL, todo} = props
      // console.log('id кнопки', e.target.dataset.num,)
      console.log('todo', todo)
      const newArray = [...todo]
      console.log('newArr', newArray)
      newArray.splice(e.target.dataset.num, 1);
      onClickDEL(newArray)
    }

    const changeTodo = (e) => {
      e.preventDefault()
      const { onClickCHANGE, todo} = props
      alert('Вы хатите чаю?')
    }

    return (
      <>
          {todo.map((item, index) => {
          return (
                <div key={index+ 'Class'}className='todoBlock'>
                  <p key={index}>{item}</p>
                  <div className='buttonBlock'>
                    <p key={index+'Edit'} id='change' onClick={changeTodo}>Изменить</p>
                    <p key={index+'Delete'} id='delete' data-num={index} onClick={delTodo}>Delete</p>
                  </div>
                </div> 
          )})}
      </>
    );
  }

const mapStateToProps = ({ todo }) => ({
  todo: todo.todoInit,
});

const mapDispatchToProps = (dispatch) => ({
  onClickDEL: (value) => dispatch(ACTION_DELETE_TODO(value)),
  onClickCHANGE: (value) => dispatch(ACTION_EDIT_TODO(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todoindex);


//По идее должна быть простая функкция

// 1. Забирает вэлью из туду
// 2. Пушит все в массив через диспатч
// 3. По нажатию на кнопку добавляет новое поле