//Libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Assets
import reducers from './reducers'; //Import the reducer

// Connect our Reducers to the Store
export default createStore(reducers, applyMiddleware(thunk));