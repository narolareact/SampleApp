//Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
	ActivityIndicator,TouchableOpacity,
	StyleSheet,TextInput,
	Modal,View,
	Text	
} from 'react-native';
//Assets
import { LoginUser } from '../Redux/actions/AuthActions';
import { styles } from '../Themes/Styles/LoginStyles'
import  {ForgotPasswordModal}  from './Common/ForgotPasswordModal'


class Login extends Component {

//===ES6 CONSTRUCTOR===//

	constructor(props) {
		super(props);

		// initially set states
		this.state = {
			username: '',
			password: '',
			error: '',
			isLoader: false,
			modalVisible: false
		};
	}

//=======LIFECYCLE METHODS=========//

// call on update props or states
componentWillReceiveProps(nextProps) {
	if(nextProps.isLoggedIn)
		{
			/*
			* if already logged in
			*/
			var page = 'Welcome';
			const resetAction = NavigationActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({ routeName: page })],
			});
			this.props.navigation.dispatch(resetAction);
		}

	if(nextProps.isLoader != undefined)
		{
			this.setState({isLoader: nextProps.isLoader});
		}

	if(nextProps.errorMessage != undefined)
		{
			this.setState({error: nextProps.errorMessage});
		}
}

//=========FUNCTIONS DECLARATION=========//

//Opens the Modal
	openModal() 
		{
			this.setState({modalVisible:true});
		}
//Closes the Modal
	closeModal() 
		{
			this.setState({modalVisible:false});
		}

//Login Validation		
	validateLogin()
		{
			if(this.state.username == "" || this.state.password == "")
				{
					return false;
				}
				
			return true;
		}
//Login User
	userLogin(e)
		{
			if(this.validateLogin())
				{
					this.props.onLogin(this.state.username, this.state.password);
				}
			else
				{

					this.setState({error: "All fields are required."});
				}

			e.preventDefault();
		}

//=========RENDER METHOD=========//
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.infoHeading}>Welcome to MyCompany.</Text>
				<TextInput
					placeholder={'Username'}
					style={styles.input}
					autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address'
					onChangeText={(text) => this.setState({username: text})} />
				<TextInput
					placeholder={'Password'}
					autoCapitalize='none'
                    autoCorrect={false} 
                    secureTextEntry={true}
					style={styles.input}
					onChangeText={(text) => this.setState({password: text})} />
				<TouchableOpacity style={styles.button} onPress={(e) => this.userLogin(e)}>
					<Text style={styles.buttonText}> Sign In </Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, {marginTop: 20}]} onPress={() => this.openModal()}>
					<Text style={styles.buttonText}> Forgot Password? </Text>
				</TouchableOpacity>
				<ForgotPasswordModal
					visible={this.state.modalVisible}	
					onRequestClose={() => this.closeModal()}
					onClosePress={() => this.closeModal()}
				/>
				{
					this.state.isLoader ? (
						<View style={{marginTop: 10}}><ActivityIndicator size="large" /></View>
					) : null
				}
				{
					this.state.error != "" ? (
						<View style={styles.errorView}>
							<Text style={styles.errorMessage}>{this.state.error}</Text>
						</View>
					) : null
				}
			</View>
		);
	}
}

//====Map Redux Store state to props of current Component====//

const mapStateToProps = ({profileReducers}) => {
	const { isLoader, isLoggedIn, errorMessage, userDetail } = profileReducers;
    return {
        isLoggedIn: isLoggedIn,
        isLoader: isLoader,
        errorMessage: errorMessage,
        userDetail: userDetail
    };
}

//====Map Redux Action to props of current Component====// 

const mapDispatchToProps = (dispatch) => {
	return {
		onLogin: (username, password) => { dispatch(LoginUser({username: username, password: password})); },
	}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);