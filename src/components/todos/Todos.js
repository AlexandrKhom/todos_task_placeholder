import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {loadTodos} from '../../redux';
import {Todo} from '../todo/Todo';
import {StyleTodo} from '../todo/StyleTodo';

export const Todos = () => {
  const dispatch = useDispatch();
  const {tasks} = useSelector(({mainReducer}) => mainReducer);

  useEffect(() => {
    if (!tasks) {
      dispatch(loadTodos(10));
    }
  }, [tasks, dispatch]);

  return (
    <StyleTodo>
      {
        !!tasks && tasks.map(task => <Todo task={task} key={task.id}/>)
      }
    </StyleTodo>
  );
};
