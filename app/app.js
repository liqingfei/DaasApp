/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/
import {
	StyleSheet ,
	Navigator ,
	View ,
	Text ,
} from 'react-native';
import React , { Component } from 'react';
import TabsViews from './tabs/tabsViews'

import Detail from './common/detail'

class App extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Navigator
				ref={ (nav)=> this.nav = nav }
				style={ styles.container }
				initialRoute={{
					scene : 'default'
				}}
				renderScene={this.renderScene}
				configureScene={(route) => {
					return Navigator.SceneConfigs.FloatFromBottomAndroid;
				}}
			/>
		)
	}
	renderScene = (route,navigator) => {
		switch(route.scene){
			case 'default' :
				return <TabsViews navigator={navigator}/>
			break
			case 'detail' : 
				return (
					<Detail 
						navigator={navigator} 
						companyName={route.companyName}
					/>
				)
			break
		}
	}
}

var styles = StyleSheet.create({
	container : {
		flex : 1 ,
	}
})

export default App
