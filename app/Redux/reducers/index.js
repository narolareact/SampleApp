//Libraries
import { combineReducers } from 'redux';

//Assets
import ProfileReducers from './profile';

// Combine all the reducers
const reducers = combineReducers({
	profileReducers: ProfileReducers
});
 
export default reducers;