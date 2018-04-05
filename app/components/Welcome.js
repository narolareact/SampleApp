//Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
	ScrollView,StyleSheet,Button,
	View,Text
} from 'react-native';
//Assets
import { LogoutUser } from '../Redux/actions/AuthActions';
import { styles } from '../Themes/Styles/WelcomeStyles'


class Welcome extends Component {

	//=======LIFECYCLE METHODS=========//

		componentWillReceiveProps(nextProps)
		 {
			if(nextProps.isLoggedIn)
				{
					var page = 'Welcome';
				}
			else
				{
					var page = 'Login';
				}

			const resetAction = NavigationActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: page })],
			});
			this.props.navigation.dispatch(resetAction);
		}

//=========FUNCTIONS DECLARATION=========//

//Logout User
		userLogout(e) 
			{
				this.props.onLogout();
				e.preventDefault();
			}

//=========RENDER METHOD=========//		

	render() {
		return (
			<View style={styles.container}>
				<Text>Welcome, {this.props.username}</Text>
				<View style={{margin: 20}}/>
                <Button style={styles.button} onPress={(e) => this.userLogout(e)} title="Logout"/>
			</View>
		);
	}
}

//====Map Redux Store state to props of current Component====//

const mapStateToProps = ({profileReducers}) => {
	const { isLoggedIn, userDetail } = profileReducers;
    return {
    	isLoggedIn: isLoggedIn,
        username: (userDetail ? userDetail.username : "")
    };
}

//====Map Redux Action to props of current Component====// 

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(LogoutUser()); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);