//Libraries
import React from 'react';

//Navigation
import { StackNavigator } from 'react-navigation';

// Import all Components and set in Stack

import Home from '../components/Home';
import Login from '../components/Login';
import Welcome from '../components/Welcome';

export const MainNavigation = StackNavigator({
	Home:{ screen: Home },
	Login: { screen: Login },
	Welcome: { screen: Welcome }
},{
	initialRouteName: 'Home',
	headerMode: 'none'
});


