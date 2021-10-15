import { DELETE_TASK, EDIT_TASK, LOAD_TODOS, SET_TASK } from '../actions';
import { sortTodos } from '../../util/todos.util';

const todos = JSON.parse(localStorage.getItem('TODOS'));

const initialState = { tasks: todos ? sortTodos(todos) : null };

export const mainReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TODOS:
      return {...state, tasks: sortTodos(payload)};

    case SET_TASK:
      const arr = state.tasks.sort((a, b) => a.id - b.id);
      const id = arr[arr.length-1]?.id + 1 || 1;
      const newTasksArr = [...state.tasks, {...action.payload, id}];

      return {...state, tasks: sortTodos(newTasksArr)};

    case EDIT_TASK:
      const filter = state.tasks.filter(value => value.id !== action.payload.id);
      const newArr = [...filter, action.payload];

      return {...state, tasks: sortTodos(newArr)};

    case DELETE_TASK:
      const tasks = state.tasks.filter(value => value.id !== payload);
      return {...state, tasks};

    default:
      return state;
  }
};
