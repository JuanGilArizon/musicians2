import { combineReducers, createStore } from 'redux';
import  { musiciansReducer } from './musicians/reducer';

const store = createStore(
    combineReducers({
        musicians: musiciansReducer
    }), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;