let initialState = {
	tab : 'find'
}

function tabs( state = initialState , action ){
	switch(action.type){
		case 'tab_select' : 
			return Object.assign( {} , state , {
				tab : action.tab
			})
		break 
		default : 
			return state
	}
}

export default tabs
