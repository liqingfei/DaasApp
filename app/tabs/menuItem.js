/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-12 16:45
#============================================================================*/

import React , { Component } from 'react'
import {
	TouchableHighlight ,
	StyleSheet ,
	Image ,
	View ,
	Text ,
} from 'react-native'

class MenuItem extends Component{
	constructor(props){
		super(props)
	}
	render(){
		var icon = this.props.selected ? this.props.selectedIcon : this.props.icon;
		var selectedTitleStyle = this.props.selected && styles.selectedTitle;
		return (
			<TouchableHighlight
				onPress={ this.props.onTabSelect }
				style={{backgroundColor:'rgba(255,255,255,1)'}}
				underlayColor={'rgba(255,255,255,1)'}
			>
				<View style={styles.container}>
					<Image style={styles.icon} source={icon} />
					<Text style={[styles.title]}>
						{this.props.title}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 50,
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	title: {
		flex: 1,
		fontSize: 17,
		color:'gray',
	},
	selectedTitle: {
		color: 'red' ,
	},
	icon: {
		marginRight: 20,
	},
})

export default MenuItem
