/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component } from 'react'
import {
	TouchableHighlight ,
	TouchableOpacity ,
	StyleSheet ,
	PixelRatio, 
	View ,
	Text ,
} from 'react-native'

class Inside extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<View>
				<Text>Inside</Text>
			</View>
		)
	}
}

var styles = StyleSheet.create({
})

export default Inside
