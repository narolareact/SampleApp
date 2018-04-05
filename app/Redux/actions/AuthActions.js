//Assets
import ACTION_TYPES from '../Types/AuthTypes';


//======USER LOGIN ACTION METHOD======//

export const LoginUser = (userData) => {
	return (dispatch) => {
		dispatch({
			type: ACTION_TYPES.ACTIVITY_LOADER,
			payload: true
		});

		let loginRes = {};

//Static Responses

		if(userData.username == 'admin' && userData.password == 'admin')
		{
			loginRes = {
					"success": true,
					"data": userData
				};
		}
		else
		{
			loginRes = {
				"success": false,
				"data": null
			}
		}
		

		setTimeout(() => {
			dispatch({
				type: ACTION_TYPES.ACTIVITY_LOADER,
				payload: false
			});

			if(loginRes.success)
			{
				
				// TODO: Store response in local storage for futher refernce

				dispatch({
					type: ACTION_TYPES.LOGIN_USER,
					payload: loginRes.data
				});
			}
			else
			{
				dispatch({
					type: ACTION_TYPES.DISPLAY_ERROR,
					payload: "Invalid Credentials"
				});

				setTimeout(() => {
					dispatch({
						type: ACTION_TYPES.DISPLAY_ERROR,
						payload: ""
					});
				}, 5000)
			}
		},2000);

		//TODO: implement fetch to call login api
		
	};
};

//======RELOAD DATA ACTION METHOD======//

export const ReloadUserData = (userData) => {
	return (dispatch) => {
		dispatch({
			type: ACTION_TYPES.LOGIN_USER,
			payload: userData
		});
	};
};

//======USER LOGOUT ACTION METHOD======//

export const LogoutUser = () => {
	return (dispatch) => {
		/*
		* TODO: should remove data from local storage too after implementation local storage
		*/
		dispatch({
			type: ACTION_TYPES.LOGOUT_USER
		});
	};
};

//======FORGOT PASSWORD ACTION METHOD======//

export const ForgotPassword = (userName) => {
	return (dispatch) => {
		dispatch({
			type: ACTION_TYPES.FORGOT_PASSWORD,
			payload: userName
		});
	};
};