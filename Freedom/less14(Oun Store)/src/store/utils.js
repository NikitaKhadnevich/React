
import ctx from "../Context/DataContext";
import React from 'react';

const createStore = (reducer) => {
   let state;
   let listners = [];

   const getState = () => state; // Служут только для возврата стэйьта 

   const dispatch = (action) => {
      state = reducer(state, action); // Функиця которая забрает стэйт и экшн
      listners.forEach(listner => listner(state))
   };// Каждый листнер мы дергаем с нашим стэйтом и по сути в листнере у нас будет некий объект, элементами которогоявляются стэйты + экшены

   const subscribe = (listner) => {
      listners.push(listner);
   }; // По сути подписываемя на событие также как addEventListner, просто обычно так React не юзается

   dispatch({}); //инициализируем стор

   return {
      getState, 
      dispatch,
      subscribe
   }
}

//Ниже создаем комбайн - сущность, которая будет проверять является ли reducer функцией  и если да, то класть их в combine
const combineReducer = (reducers) => {
   const reducersObj = {};
   const nextState = {}

   Object.keys(reducers).forEach(key => {
      if (typeof key === 'function') {
         reducersObj[key] = reducers[key]
      } // Проводим проверку, на функцию
   }) // Проходимся по массиву ключей

   const rootReducer = (state = {}, action) => {
      Object.keys(reducersObj).forEach(key => {
         const reducer = reducersObj[key]; //  ПО сути reducer - каждая функция, ее название
         nextState[key] = reducer(state[key], action) // А тут мы вызываем эту каждую функцию
      });
      return nextState
   }
   return rootReducer
}

const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
   class Connect extends React.Component {
   state = this.props.store.getState();
   
   componentDidMount() {
      this.props.store.subscribe((state) => {
      this.setState(state);
      });
   }

   render() {
      const { store } = this.props;
      
      return (
      <Component
         {...this.props}
         {...mapStateToProps(store.getState())}
         {...mapDispatchToProps(store.dispatch)}
      />
      );
   }
   }
   return (props) => (
   <ctx.DataContext.Consumer>
      {(store) => <Connect {...props} store={store}/>}
   </ctx.DataContext.Consumer>
   )
} // И создаем коннект для получения и передачи состония стора
//Теперь нам для работы нужен контекст, так как мы не юзаем редакс/реакт для хранения стора , коннектимся к провайдеру

const obj = {
   connect,
   createStore,
   combineReducer
}

export default obj