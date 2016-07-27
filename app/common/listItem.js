/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component , PropTypes } from 'react'
import {
	TouchableHighlight ,
	StyleSheet ,
	Image ,
	View ,
	Text ,
} from 'react-native'

class ListItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			selected : false ,
		}
	}
	static contextTypes = {
		setHeader : PropTypes.func.isRequired ,
		pop : PropTypes.func.isRequired ,
	}
	render = () => {
		let { data } = this.props
		let bgColor = this.state.selected ? styles.selected : false
		return (
			<TouchableHighlight
				delayLongPress={1000}
				onLongPress={ this.longPressHandler(data.id) }
				onPress={ this.pressHandler(data.companyName) }
				style={{backgroundColor:'rgba(255,255,255,1)'}}
				activeOpacity={0.5}
				underlayColor={'rgba(255,255,255,.8)'}
			>
				<View style={[ styles.list, bgColor ]}>
					<View style={ styles.avatar }></View>
					<View style={ styles.companyInfo }>
						<Text style={ styles.title }>{ data.companyName }</Text>
						<Text>{ data.companyInfo }</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
	longPressHandler = (id)=>{
		var that = this
		return ()=>{
			this.setState({
				selected : !this.state.selected
			})

			if(this.state.selected){
				this.props.addSelected( id )
				this.props.setHeader(true)
			}else{
				this.props.removeSelected( id )
				this.props.setHeader(false)
			}
		}
	}
	pressHandler = (companyName)=>{
		return ()=>{
			this.props.navigator.push({
				scene:'detail',
				companyName : companyName ,
			});
		}
	}
}

var styles = StyleSheet.create({
	list : {
		flex : 1 ,
		flexDirection : 'row' ,
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:5,
		paddingRight:5,
		borderColor:'#dedede',
		borderBottomWidth:1,
	},
	avatar : {
		width: 50 ,
		height: 50 ,
		backgroundColor : 'green',
		borderRadius:25,
		margin:10,
	},
	companyInfo : {
		flex : 1 ,
		flexDirection : 'column',
		justifyContent : 'space-around' ,
	},
	title : {
		color : 'black',
		fontSize : 16,
	},
	selected : {
		backgroundColor : '#ececec' ,
	},
})


export default ListItem
