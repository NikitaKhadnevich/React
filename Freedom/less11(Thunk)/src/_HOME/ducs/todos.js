export const GET_TODOS_SUCCEED = 'GET_TODOS_SUCCEED';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
export const GET_TODOS_REQUESTED = 'GET_TODOS_REQUESTED';
import { API } from '../api/RestApi'

//Задаем Инит стэйт
export const initialTodossState = {
   isFetching: false,
   Arrdata: [],
   error: null,
}

export const getTODOSRequested = () => (
   {
      type: GET_TODOS_REQUESTED  
   }
)
export const getTODOSSucceed = (data) => (
   {
      type: GET_TODOS_SUCCEED, // Тут происходит триггер на Экшене и передается дата 
      data,
   }
)
export const getTODOSFailed = (error) => (
   {
      type: GET_TODOS_FAILED,
      error,
   }
)

// 6. ПОСЛЕ перехвата мидлваркой и обработки тут и происходит магия передачи экшена варкой в запрос, а затем она выплевывает в стэйт-результат
export const ACTION_GET_TODOS = (path) => async (dispatch) => { 
   try {
      dispatch(getTODOSRequested()) //6.1 Запускаем спиннер 
      const data = await API.getAxios(path); //6.2 Юзаем наше апи с запросом
      dispatch(getTODOSSucceed(data)); //6.3 Кладем данные в стор и останавливам спиннер
   } catch (error) { 
      dispatch(getTODOSFailed(error)); // 6.4 Выводим ошибку и останавливаем спиннер
   }
}; 

export const todos = (state = initialTodossState, action) => {
   switch (action.type) {
      case GET_TODOS_REQUESTED:
         return {
         ...state,
         isFetching: true,
         };
      case GET_TODOS_SUCCEED:
         return {
         ...state,
         Arrdata: action.data, // 7. А тут , по классике принимется
         isFetching: false,
         };
      case GET_TODOS_FAILED:
         return {
         ...state,
         error: 'Чэхи и Паляки поломали сервер',
         isFetching: false,
         };
      default:
         return { ...state };
   }
};