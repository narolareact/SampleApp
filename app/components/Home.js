
//Libraries
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {ActivityIndicator,View,} from 'react-native';
	
//Assets
import { ReloadUserData } from '../Redux/actions/AuthActions';
import { styles } from '../Themes/Styles/HomeStyles' 

class Home extends Component {

//=======LIFECYCLE METHODS=========//

	componentDidMount() {
		// TODO: implement local storage to maintain logged user session
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'Login' })],
		});
		this.props.navigation.dispatch(resetAction);
	}

//=========RENDER METHOD=========//

	render() {
		// showing loader initially
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
}


//====Map Redux Store state to props of current Component====//

const mapStateToProps = ({ profileReducers }) => {
	const { isLoggedIn } = profileReducers
    return {
        isLoggedIn: isLoggedIn
    };
}

//====Map Redux Action to props of current Component====//

const mapDispatchToProps = (dispatch) => {
	return {
		ReloadUserData: (userdetail) => { dispatch(ReloadUserData(userdetail)); },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);