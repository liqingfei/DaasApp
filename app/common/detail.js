/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component } from 'react'
import {
	TouchableHighlight ,
	StyleSheet ,
	View ,
	Text ,
} from 'react-native'

import ListContainer from './listContainer'
import List from './list'

class Detail extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<ListContainer
				title={this.props.companyName}
				titleColor={"white"}
				navIcon={require("../img/arrow-back.png")}
				bgColor={"#5cc5ab"}
				onIconClicked={this.iconClickHandler}
				actions={[
					{
						title:'search',
						icon:require('../img/delete.png'),
						show:'always',
						callback:function(){console.log(0)}
					},
					{
						title : 'filter',
						icon : require('../img/more-vert.png'),
						show : 'always',
						callback : function(){console.log(1)}
					},
				]}
			>
			</ListContainer>
		)
	}
	iconClickHandler = ()=>{
		this.props.navigator.pop()
	}
}

var styles = StyleSheet.create({
});

export default Detail
		/* return ( */
		/* 	<View> */
		/* 		<TouchableHighlight */
		/* 			onPress={ this.pressHandler } */
		/* 			style={{backgroundColor:'rgba(255,255,255,1)'}} */
		/* 			activeOpacity={0.5} */
		/* 			underlayColor={'rgba(255,255,255,.8)'} */
		/* 		> */
		/* 			<Text style={styles.container}>detail</Text> */
		/* 		</TouchableHighlight> */
		/* 	</View> */
		/* ) */
