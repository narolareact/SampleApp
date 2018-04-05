//Libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
 
//Assets
import store from './app/Redux/CreateStore'; //Import the store
import AppNavigation from './app/Navigation/AppNavigation' //Import the component file
 

/**
 * Provides an entry point into our application.index.js 
 * call this component first.
 **/


export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		);
	}
}