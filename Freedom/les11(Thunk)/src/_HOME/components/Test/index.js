import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { todos } from '../../ducs/todos';

export const Test = (props) => {

    const { getData, posts, errorPost, fetchPost, fetchTodo, errorTodo } = props;

    const hash = window.location.pathname
    console.log(`window.location`, hash)
    // useEffect(() => {
    //   getData('/todos');
    // }, []); //  Использую для загрузки сразу

    // const getDataTodos = () => {
    //   return getData('/todos')
    // }

    const path = props.match.path

    return (
        <>
          {
            fetchPost.length && hash === '/posts'?    
            <div className='List'>
            {fetchPost.map((item, index) => {
              return (
              <div id={item.title} key={item.id}><Link to={`${path}/${item.id}`}>{item.title}</Link></div>
              )})}
            </div> : 
            fetchTodo.length && hash === '/todos' ?  
            <div className='List'>
            {fetchTodo.map((item, index) => {
              return (
              <div id={item.title} key={item.id}><Link to={`${path}/${item.id}`}>{item.title}</Link></div>
              )})}
            </div> : 
            errorPost && hash === '/posts'? <h1>{errorPost}</h1> :
            errorTodo && hash === '/todos'? <h1>{errorTodo}</h1> : null
              }
        </>
    )
  }

export const mapStateToProps = ({ posts, todos }) => ({
  fetchPost: posts.Arrdata,
  errorPost: posts.error,
  fetchTodo: todos.Arrdata,
  errorTodo: todos.error
});

export default connect(mapStateToProps)(Test);

