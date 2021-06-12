import React from 'react'
import { connect } from 'react-redux';
import { ACTION_GET_POSTS } from '../../_HOME/ducs/posts' // Наша мидлварка//
import { useContext, useState, useEffect } from 'react';
import Home from '../components/Home/Home'
import Test from '../components/Test/index'
import PostsRender from '../components/PostsRender/PostsRender'
import TodoRender from '../components/TodoRender/TodoRender'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { getDataPosts } from '../components/Test/index'
import { ACTION_GET_POSTSMIDL, ACTION_GET_TODOSMIDL } from '../middlewares/actions'

function RouterData(props) {

   const getDataPosts = (e) => {
      const { getPost } = props
      getPost(e.target.dataset.path) //1. Передаем в пропсы наш path (/posts)
   }
   const getDataTodos = (e) => {
      const { getTodos } = props
      getTodos(e.target.dataset.path) 
   }

   return (
      <>
         <Router>
            <div className='Posts'>
            <p>Каталог статей и заданий</p>
               <div className='navigation'>
               <Link to='/'>Home</Link>
               <Link to='/posts' data-path='/posts' onClick={getDataPosts}>Статьи</Link>
               <Link to='/todos'data-path='/todos' onClick={getDataTodos}>Задания</Link>
               </div>
               <Switch> 
                  <Route exact path='/' component={Home} />
                  <Route exact path='/posts' component={Test} />
                  <Route path='/posts/:id' component={PostsRender} />
                  <Route exact path='/todos' component={Test} />
                  <Route exact path='/todos/:id' component={TodoRender} />
               </Switch>
            </div>
         </Router>
      </>
   )
}

export const mapStateToProps = ({ posts, todos }) => ({
   // fetch: posts.Arrdata,
   // error: posts.error,
   // fetchTodo: todos.Arrdata,
   // errorTodo: todos.error
});

export const mapDispatchToProps = (dispatch) => ({
   getPost: (path) => {
      dispatch(ACTION_GET_POSTSMIDL(path));
   }, // 2. Передаем наш path в ЭКШН МИДЛВАРКИ
   getTodos: (path) => {
      dispatch(ACTION_GET_TODOSMIDL(path));
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterData);