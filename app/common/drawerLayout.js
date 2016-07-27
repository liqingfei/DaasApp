/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component } from 'react'
import {
	StyleSheet ,
	DrawerLayoutAndroid ,
	View ,
	Text ,
} from 'react-native'

class DrawerLayout extends Component{
	constructor(props){
		super(props)
		this.openDrawer = this.openDrawer
		this.closeDrawer = this.closeDrawer
		this.onDrawerOpen = this.onDrawerOpen
		this.onDrawerClose = this.onDrawerClose
	}
	render(){
		const { drawerWidth , drawerPosition , renderNavigationView } = this.props
		const { Right, Left } = DrawerLayoutAndroid.positions;
		return (
			<DrawerLayoutAndroid
				ref={ (drawer)=> this.drawer = drawer }
				drawerWidth = { drawerWidth }
				drawerPosition={ drawerPosition === 'right' ? Right : Left }
				renderNavigationView = { renderNavigationView }
				onDrawerOpen={this.onDrawerOpen}
				onDrawerClose={this.onDrawerClose}
			>
				{this.props.children}
			</DrawerLayoutAndroid>
		)
	}
	onDrawerOpen(){
		console.log('open')
	}
	onDrawerClose(){
		console.log('close')
	}
	closeDrawer() {
		this.drawer && this.drawer.closeDrawer();
	}
    openDrawer() {
		this.drawer && this.drawer.openDrawer();
    }
}

var styles = StyleSheet.create({
})

export default DrawerLayout
