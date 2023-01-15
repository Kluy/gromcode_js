import {createStore} from 'redux';
import { optionsReducer } from './options/options.reducer';

const store = createStore(optionsReducer);

export default store;