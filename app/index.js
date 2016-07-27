/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-05 16:24
#============================================================================*/

'use strict'

import {
	StyleSheet ,
	View ,
	Text ,
	StatusBar ,
} from 'react-native'

import { Provider } from 'react-redux'
import React , { Component } from 'react'
import configureStore from './store/configureStore'
import App from './app'

const store = configureStore()

class renderRoot extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar
						translucent={ true }
						backgroundColor="rgba(0,0,0,0.2)"
						barStyle="light-content"
					/>
					<App />
				</View>
			</Provider>
		)
	}
}

var styles = StyleSheet.create({
	container : {
		flex : 1 ,
	}
})

const DaasApp = ()=>{
	console.disableYellowBox = true;
	return renderRoot;
}

export default DaasApp
