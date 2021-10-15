import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

import {reducer} from './reducer';

const setter = (store) => (next) => (action) => {
  next(action);
  const {mainReducer: {tasks}} = store.getState();

  localStorage.setItem('TODOS', JSON.stringify(tasks));
};

const middleware = [ReduxThunk, setter];

export const store = createStore(reducer, applyMiddleware(...middleware));

export * from './actions';
