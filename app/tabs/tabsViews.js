/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	StyleSheet ,
	Image ,
	View ,
	Text ,
} from 'react-native'

import DrawerLayout from '../common/drawerLayout'
import MenuItem from './menuItem'
import Find from './find/'
import Inside from './inside/'
import Outside from './outside/'
import User from './user/'

import * as tabsAction from '../actions/tabs'
import * as headerAction from '../actions/header'


class TabsViews extends Component{
	constructor(props){
		super(props)
	}
	static childContextTypes = {
		openDrawer : PropTypes.func.isRequired
	}
	getChildContext = ()=>{
		return {
			openDrawer: this.openDrawer,
		}
	}
	openDrawer = () => {
		this.refs.drawer.openDrawer();
	}
	render = () => {
		return (
			<DrawerLayout
				ref={"drawer"}
				drawerWidth={290}
				drawerPosition="left"
				renderNavigationView={this.renderNavigationView}
			>
				<View style={styles.content}>
					{ this.renderContent() }
				</View>
			</DrawerLayout>
		)
	}
	renderNavigationView = ()=>{
		const { tabsReducer } = this.props 
		return (
			<View style={styles.drawer}>
				<Image
					style={styles.header}
					source={require('../img/drawer-header.png')}
				>
					<View style={styles.touxiang}></View>
					<Text style={styles.username}>孙奎伟</Text>
					<Text style={styles.jianjie}>david_skw@icloud.com</Text>
				</Image>
				<MenuItem
					title={'发现'}
					selected={ tabsReducer.tab === 'find'}
					onTabSelect={ this.onTabSelect.bind(this,'find') }
					icon={require('../img/find.png')}
					selectedIcon={require('../img/find-select.png')}
				/>
				<MenuItem
					title={'内部'}
					selected={ tabsReducer.tab === 'inside'}
					onTabSelect={ this.onTabSelect.bind(this,'inside') }
				    icon={require('../img/inside.png')}
				    selectedIcon={require('../img/inside-select.png')}
				/>
				<MenuItem
					title={'外部'}
					selected={ tabsReducer.tab === 'outside'}
					onTabSelect={ this.onTabSelect.bind(this,'outside') }
					icon={require('../img/outside.png')}
					selectedIcon={require('../img/outside-select.png')}
				/>
				<MenuItem
					title={'用户'}
					selected={ tabsReducer.tab === 'user'}
					onTabSelect={ this.onTabSelect.bind(this,'user') }
					icon={require('../img/user.png')}
					selectedIcon={require('../img/user-select.png')}
				/>
			</View>
		)
	}
	renderContent = () => {
		const { tabsReducer } = this.props
		switch(tabsReducer.tab){
			case 'find' : 
				return <Find navigator={this.props.navigator}/>
			break
			case 'inside' : 
				return <Inside navigator={this.props.navigator}/>
			break
			case 'outside' : 
				return <Outside navigator={this.props.navigator}/>
			break
			case 'user' : 
				return <User navigator={this.props.navigator}/>
			break
		}
	}
	onTabSelect = (tab) => {
		if( tab !== this.props.tabsReducer.tab ){
			this.props.tabsAction.tabSelect(tab)
		}
		this.refs.drawer.closeDrawer()
	}
}

var styles = StyleSheet.create({
	content: {
		flex: 1,
	},
	drawer: {
		flex: 1,
		backgroundColor: 'white',
	},
	header: {
		height : 170,
		backgroundColor: 'yellow' ,
		marginBottom:20,
		/* justifyContent: 'flex-end', */
	},
	touxiang : {
		marginTop:45,
		marginLeft:20,
		marginBottom:20,
		height:60,
		width:60,
		borderRadius:30,
		backgroundColor:'yellow',
	},
	username : {
		marginLeft:20 ,
		color : 'white',
	},
	jianjie: {
		marginLeft:20 ,
		color : '#f7f7f7',
		fontSize: 12 ,
	},
})

function mapStateToProps(state){
	return {
		tabsReducer : state.tabs ,
		headerReducer : state.header ,
	}
}

function mapDispatchToProps(dispatch){
	return {
		tabsAction : bindActionCreators( tabsAction , dispatch ) ,
		headerAction : bindActionCreators( headerAction , dispatch ) ,
	}
}

export default connect(
	mapStateToProps ,
	mapDispatchToProps
)(TabsViews);
