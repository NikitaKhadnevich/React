import React from 'react'
import { connect } from 'react-redux';


const TodoRender = (props) => {
  const { getData, posts, errorTodo, fetchTodo } = props;
  const propsHash = props.match.params.id
  return (
    <>
    {fetchTodo.map((item, index) => {
      if (propsHash == item.id) {
        return (
          <div className={`Render${String(item.completed)}`} key={item.id}>
              <p>Номер Задания: {item.id}</p>
              <p>Заголовок: {item.title}</p>
              <div className="todoResult"><p>Результат выполнения: </p>
              {String(item.completed) === 'false' ? 
                  <p id='falseTodo'>{String(item.completed)}</p> :
                  <p id='trueTodo'>{String(item.completed)}</p>}
              </div>
          </div>
          )
        } else {
          <h4>Ошибка в запросе :(</h4>
        }
      })
    }    
    </>
  )
}

export const mapStateToProps = ({ todos }) => ({
   fetchTodo: todos.Arrdata,
 });


 export default connect(mapStateToProps)(TodoRender);