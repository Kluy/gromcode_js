import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from "./tasks/tasks.reducers";

const logger = state => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
    tasks: tasksReducer,
})

const store = createStore(mainReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
    );

export default store;