import { DELETE_TASK, EDIT_TASK, LOAD_TODOS, SET_TASK } from './actionTypes';
import { getTodos } from '../../services/todosService';

export const loadTodos = (limit) => async (dispatch) => {
  try {
    const todos = await getTodos(limit);

    localStorage.setItem('TODOS', JSON.stringify(todos));
    dispatch({type: LOAD_TODOS, payload: todos});
  } catch (e) {
    console.error(e);
  }
};

export const setTask = (payload) => ({type: SET_TASK, payload});
export const deleteTask = (payload) => ({type: DELETE_TASK, payload});
export const editTask = (payload) => ({type: EDIT_TASK, payload});


