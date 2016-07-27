/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component , PropTypes } from 'react'
import {
	TouchableHighlight ,
	TouchableOpacity ,
	TextInput ,
	StyleSheet ,
	PixelRatio, 
	View ,
	Text ,
} from 'react-native'

import DrawerLayout from '../../common/drawerLayout'
import ListContainer from '../../common/listContainer'
import List from '../../common/list'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as headerAction from '../../actions/tabs'
import * as headerActions from '../../actions/header'

class Find extends Component{
	constructor(props){
		super(props)
		this.renderNavigationView = this._renderNavigationView
		this.renderContent = this._renderContent
		this.openDrawer= this._openDrawer
	}
	static contextTypes = {
		openDrawer : PropTypes.func.isRequired
	}
	render = () => {
		return (
			<DrawerLayout
				ref={ (drawer)=> this.drawer = drawer }
				drawerWidth={290}
				drawerPosition="right"
				renderNavigationView={this.renderNavigationView}
			>
				<View style={styles.content}>
					{ this.renderContent() }
				</View>
			</DrawerLayout>
		)
	}
	_renderNavigationView = () => {
		return (
			<View>
				<Text>i am the filter</Text>
			</View>
		)
	}
	_renderContent = () => {
		return (
			<ListContainer
				title={"发现"}
				titleColor={"white"}
				navIcon={require("../../img/menu.png")}
				bgColor={"#5cc5ab"}
				onIconClicked={this.context.openDrawer}
				actions={[
					{
						title:'search',
						icon:require('../../img/search.png'),
						show:'always',
						callback:function(){console.log(0)}
					},
					{
						title : 'filter',
						icon : require('../../img/filter.png'),
						show : 'always',
						callback : function(){console.log(1)}
					},
				]}
			>
				<List navigator={this.props.navigator} />
			</ListContainer>
		)
	}
	_openDrawer= ()=>{
		console.log(this.props)
	}
}

var styles = StyleSheet.create({
	content: {
		flex: 1,
	},
	listxxx : {
		paddingLeft:10,
		paddingRight:10,
		paddingTop:10,
		paddingBottom:10,
		borderBottomWidth:1/PixelRatio.get(),
	}
})

export default connect(
)(Find);
