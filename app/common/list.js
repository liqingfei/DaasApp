/*============================================================================
#					Author : david_skw                                  
#					Email  : david_skw@icloud.com                       
#				    Last modified : 2016-07-08 15:49
#============================================================================*/

import React , { Component , PropTypes } from 'react'
import {
	ListView ,
	RefreshControl ,
} from 'react-native'

import ListItem from './listItem'

var data = [
	{
		id : 1 ,
		companyName : '江苏回龙有限公司1',
		companyInfo : '逢山开路飞机萨哈夫开始叫雷锋精神垃圾房撒冯绍峰撒发生了飞机拉菲克觉得撒放辣椒' ,
	},
	{
		id : 2 ,
		companyName : '江苏回龙有限公司2',
		companyInfo : '逢山开路飞机萨哈夫开始叫雷锋精神垃圾房撒冯绍峰撒发生了飞机拉菲克觉得撒放辣椒' ,
	},
	{
		id : 3 ,
		companyName : '江苏回龙有限公司3',
		companyInfo : '逢山开路飞机萨哈夫开始叫雷锋精神垃圾房撒冯绍峰撒发生了飞机拉菲克觉得撒放辣椒' ,
	},
]

class List extends Component{
	constructor(props){
		super(props)
		var ds = new ListView.DataSource({rowHasChanged : (r1,r2)=>r1!==r2 })
		this.state = {
			selecteds : [] ,
			isRefreshing: false,
			dataSource : ds.cloneWithRows(data)
		}
	}
	static contextTypes = {
		setHeader : PropTypes.func.isRequired ,
		pop : PropTypes.func.isRequired ,
		setTitle : PropTypes.func.isRequired ,
	}
	render = () => {
		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow = { this.renderList }
				refreshControl={
					<RefreshControl
						refreshing={this.state.isRefreshing}
						onRefresh={this.onRefresh}
						tintColor="#ff0000"
						title="Loading..."
						titleColor="#00ff00"
						colors={['#ff0000', '#00ff00', '#0000ff']}
						progressBackgroundColor="#ffff00"
					/>
				}
			/>
		)
	}
	renderList = (data)=>{
		return (
			<ListItem 
				data={data}
				navigator={this.props.navigator }
				addSelected={this.addSelected}
				removeSelected={this.removeSelected}
				setHeader={this.setHeader}
			/>
		)
	}
	setHeader = (model)=>{
		let that = this
		if(this.state.selecteds.length == 0 ){
			this.context.pop()
		}else if(this.state.selecteds.length == 1 && model ){
			this.context.setHeader({
				title : '' + this.state.selecteds.length ,
				bgColor : 'gray' ,
				onIconClicked : that.backIconClickHandler,
				navIcon : require("../img/arrow-back.png") ,
				actions : [
					{
						title:'收藏',
						icon:require('../img/delete.png'),
						show:'always',
						callback: that.collectIconClickHandler
					},
					{
						title : '更多',
						icon : require('../img/more-vert.png'),
						show : 'always',
						callback : that.moreIconClickHandler
					},
				]
			})
		}else{
			this.context.setTitle(this.state.selecteds.length)
		}
	}
	addSelected = ( id , selected )=>{
		this.setState({
			selecteds : this.state.selecteds.concat(id)
		})
	}
	removeSelected = (id )=>{
		let ind = this.state.selecteds.indexOf(id)
		let newArr = this.state.selecteds
		newArr.splice( ind, 1 )
		this.setState({
			selecteds : newArr
		})
	}
	backIconClickHandler = ()=>{
		this.context.pop()
	}
	collectIconClickHandler = ()=>{
		console.log('collectIconClick')
	}
	moreIconClickHandler = ()=>{
		console.log('moreIconClick')
	}
	onRefresh = ()=>{
		this.setState({isRefreshing: true});
		setTimeout(()=>{
			this.setState({isRefreshing: false});
		},2000)
	}
}

export default List
