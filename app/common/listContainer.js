/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component , PropTypes } from 'react'
import {
	TouchableHighlight ,
	StyleSheet ,
	View ,
	Text ,
} from 'react-native'

import Header from './header'

class ListContainer extends Component{
	constructor(props){
		super(props)
		this.renderList = this._renderList
		this.pressHandler = this._pressHandler
	}
	static childContextTypes = {
		setHeader : PropTypes.func.isRequired ,
		pop : PropTypes.func.isRequired ,
		setTitle : PropTypes.func.isRequired ,
	}
	getChildContext = ()=>{
		return {
			setHeader : this.setHeader,
			pop : this.pop,
			setTitle : this.setTitle,
		}
	}
	setHeader = (headerConf) => {
		this.refs.header.setHeader(headerConf)
	}
	pop = () => {
		this.refs.header.pop()
	}
	setTitle = (title)=>{
		this.refs.header.setTitle(title)
	}
	render = () => {
		const { children , ...headerConf } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
					<Header 
						ref={'header'}
						{ ...headerConf }
					/>
				</View>
				{ children }
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1 ,
	},
	headerWrapper:{
      elevation: 2,
      backgroundColor: 'gray',
      borderRightWidth: 1,
      marginRight: -1,
      borderRightColor: 'transparent',
	}
})

export default ListContainer
