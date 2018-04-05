//Libraries
import React from 'react'

//Navigation
import { addNavigationHelpers } from 'react-navigation'

//Assets
import { MainNavigation } from './AppNavigationConfiguration'


export default class AppNavigation extends React.Component {
    render() {
        return(
            <MainNavigation /> 
        )
    }
}
