import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_NAME,
  ACTIONS_ADD_LIKE,
  ACTIONS_ADD_TODO,
  ACTION_EDIT_TODO,
  ACTION_DELETE_TODO,
  ACTION_SHOW_TODOCHANGED
} from '../../ducks/actionCreators';


const mapStateToProps = ({ todo, form }) => ({ // 1. Подтягиваем все пропсы из Стэйта
  texts: form.names,
  todo: todo.todoInit,
  status: todo.isChanged.status,
  dataset: todo.isChanged.dataset,
  datalike: todo.datalike
});
const mapDispatchToProps = (dispatch) => ({ // 2. Создаем диспатч-функции для действий с туду
  onClickADD: (value) => dispatch(ACTIONS_ADD_TODO(value)), //2.1 Добавить туду
  onClickDEL: (value) => dispatch(ACTION_DELETE_TODO(value)), //2.2 Удалить туду
  onClickCHANGETODO: (changed, dataset) => dispatch(ACTION_SHOW_TODOCHANGED(changed, dataset)), //2.3 Поле с Изменить туду
  onInputName: (value) => dispatch(ACTION_ON_INPUT_NAME(value)), // 2.4 Сохранить данные в поле форм
  onClickEDITTODO: (value) => dispatch(ACTION_EDIT_TODO(value)), // 2.4 Изменить само туду, взяв данные из форм
  onClickADDLIKE: (target, counter) => dispatch(ACTIONS_ADD_LIKE(target, counter)), // 2.5 Добавить лайк
});

const Todoindex = (props) => {
    const { todo, status, names , dataset, texts, datalike } = props;

    const changedhandleName = (e) => {
      const { onInputName } = props;
      onInputName(e.target.value);
    };

    const addToDo = (e) => { 
      e.preventDefault()
      const { onClickADD, texts } = props // Создаем пропс для прокидки
      onClickADD(texts) // Добавляем в стэйт
      document.getElementById("firstTodo").value = ""; // Очищаем вэлью инпута
    }

    const delTodo = (e) => {
      e.preventDefault()
      const { onClickDEL, todo} = props 
      const newArray = [...todo] // Забираем массив из стэйта
      newArray.splice(e.target.dataset.num, 1); // Удаляем целевой массив через слайс
      onClickDEL(newArray)
    }

    const addLike = (e) => {
      e.preventDefault()
      const { onClickADDLIKE, datalike} = props // Блок не совсем верно работает - не хватает редьюсера правильного
      const targetClick = e.target.dataset.num
      const counterClick = ++datalike[targetClick].counter
      onClickADDLIKE(targetClick, counterClick)
    }

    const changeTodo = (e) => {
      e.preventDefault()
      const { onClickCHANGETODO, status, dataset } = props
      onClickCHANGETODO(!status, e.target.dataset.num) // Меняем статус, тем самым выводим в верстку div='ChangeTodoForm'
    }                                                   // И отдаем наш дата-сет номер блока для того, чтобы бы ло понятно КАКОЙ из тудусов менять

    const editTodo = (e) => {
      e.preventDefault()
      const { onClickEDITTODO, todo, dataset, texts} = props
      const swapTodo = todo[dataset]
      const itemTodo = todo.indexOf(swapTodo);
      if (itemTodo !== -1) { // Если данные не изменены - то ничего не вернется
        todo[itemTodo] = texts;
      }
      onClickEDITTODO(todo) // Передаем данные в стэйт (массив тудушек)
      changeTodo() // И меняем по сути статус и скрываем блок
    }

    return (
      <>  
        <button onClick={addToDo}>Add Todo</button>
          {todo.map((item, index) => {
          return (
                <div key={index+ 'Class'}className='todoBlock'>
                  <p key={index}>{item}</p>

                  <div className='likeCounter'>
                    <p data-num={index} onClick={addLike}>❤</p>
                    <p>{datalike[0].counter}</p>
                  </div>
                  <div className='buttonBlock'>
                    <p key={index+'Edit'} id='change' data-num={index} onClick={changeTodo}>Change</p>
                    <p key={index+'Delete'} id='delete' data-num={index} onClick={delTodo}>Delete</p>
                  </div>
                </div>
          )})}

          {(status == true && dataset) ? // Проверяем статус и есть у эл-та датасет(мало ли)
          <div className='ChangeTodoForm'>
            <input placeholder="Enter Name" value={names} onChange={changedhandleName} />
            <button data-num={dataset} onClick={editTodo}>Edit Todo</button>
            <button data-num={dataset} onClick={changeTodo}>Close Todo</button>
          </div> 
          : null}
      </>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(Todoindex);
