//Assets
import ACTION_TYPES from '../Types/AuthTypes';

//====INITIAL STATE=====//

const defaultState = {
	isLoader: false,
	errorMessage: '',
	isLoggedIn: false,
	userDetail: {}
};

const ProfileReducers = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_TYPES.LOGIN_USER:
			return Object.assign({}, state, { 
                isLoggedIn: true,
                userDetail: action.payload
			});
			
		case ACTION_TYPES.LOGOUT_USER:
			return Object.assign({}, state, { 
                isLoggedIn: false,
                userDetail: {}
			});

		case ACTION_TYPES.ACTIVITY_LOADER:
			return Object.assign({}, state, { 
                isLoader: action.payload
			});
			
		case ACTION_TYPES.DISPLAY_ERROR:
			return Object.assign({}, state, { 
                errorMessage: action.payload
			});
			
		case ACTION_TYPES.FORGOT_PASSWORD:
			return state;
		default:
			return state;
    }
};

export default ProfileReducers;