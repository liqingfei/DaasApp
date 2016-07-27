import { combineReducers } from 'redux'
import demo from './demo/demo'
import tabs from './tabs'
import header from './header'
import actions from './header/actions'

const rootReducer = combineReducers({
	demo ,
	tabs ,
	header ,
	actions ,
})

export default rootReducer
