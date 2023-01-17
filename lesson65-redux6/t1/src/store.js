import {createStore} from 'redux';
import { counterReducer } from './counter/counter.reducer';

const store = createStore(counterReducer);

export default store;