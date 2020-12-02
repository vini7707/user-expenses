import { combineReducers } from 'redux';
import UserReducer from './userReducer'

const rootReducers = combineReducers({
	User : UserReducer,
})

export default rootReducers ;