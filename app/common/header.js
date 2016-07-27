/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/



import React , { Component } from 'react'
import {
	ToolbarAndroid ,
	TextInput ,
	StyleSheet ,
	Dimensions ,
	Animated ,
	Platform ,
	Image ,
	View ,
	Text ,
} from 'react-native'

var oldHeaderConf = []

class Header extends Component{
	constructor(props){
		super(props)
		this.setHeader = this._setHeader
		this.pop = this._pop
		this.setTitle = this._setTitle
		this.state = {
			...this.props ,
			fadeAnim : new Animated.Value(1) ,
		}
	}
	componentWillMount(){
		console.log(this.state)
	}
	componentWillUpdate(oldState,newState){
		oldHeaderConf.push(oldState)
	}
	_pop = ()=>{
		this.switchHeader(oldHeaderConf[0])
		oldHeaderConf.pop()
	}
	_setHeader = (headerConf)=>{
		this.switchHeader(headerConf)
	}
	_setTitle = (titles)=>{
		this.setState({
			title : '' + titles
		})
	}
	switchHeader = (conf)=>{
		Animated.timing(
			this.state.fadeAnim,
			{ 
				toValue : 0 ,
				duration : 100 ,
			}
		).start(()=>{
			this.setState(
				Object.assign({},this.state,conf)
			)
			Animated.timing(
				this.state.fadeAnim,
				{ 
					toValue : 1 ,
					duration : 100 ,
				}
			).start()
		})  
	}
	render(){
		return (
			<Animated.View style={[
				styles.toolbarContainer,
				{
					backgroundColor : this.state.bgColor,
					opacity : this.state.fadeAnim
				}
			]}>
				<ToolbarAndroid
					style={[styles.toolbar]}
					{ ...this.state }
					onActionSelected={this.actionSelected}
				>
				</ToolbarAndroid>
			</Animated.View>
		)
	}
	actionSelected = (index)=>{
		this.state.actions[index]['callback']()
	}
}

var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
var HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

var styles = StyleSheet.create({
	toolbarContainer: {
		paddingTop: STATUS_BAR_HEIGHT,
	},
	toolbar: {
		height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
	},
	header: {
		backgroundColor: 'transparent',
		paddingTop: STATUS_BAR_HEIGHT,
		height: HEADER_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
    },
	leftItem: {
		flex: 1,
		alignItems: 'flex-start',
	},
	centerItem: {
		flex: 2,
		alignItems: 'center',
	},
	rightItem: {
		flex: 1,
		alignItems: 'flex-end',
	},
	itemWrapper: {
		padding: 11,
	},
	itemText: {
		letterSpacing: 1,
		fontSize: 12,
		color: 'white',
	},
});

export default Header
