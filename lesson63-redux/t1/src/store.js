import counterReducer from "./counter.reducer";
import { createStore } from 'redux';

const store = createStore(counterReducer);

export default store;