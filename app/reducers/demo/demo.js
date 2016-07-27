let initialState = {
	number : 0
}

function demo( state = initialState , action ){
	switch(action.type){
		case 'PLUS' : 
			return Object.assign( {} , state , {
				number : state.number + 1
			})
			break 
		case 'MINS' :
			return Object.assign( {} , state , {
				number : state.number - 1
			})
			break
		default : 
			return state
	}
}

export default demo
