let initialState = {
}

function actions( state = initialState , action ){
	switch(action.type){
		case 'set_header' : 
			return Object.assign( {} , state , action.header )
		default : 
			return state
	}
}

export default actions
