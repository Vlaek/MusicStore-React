import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authReducer } from './reducers/authReducer'
import thunk from 'redux-thunk'
import { orderReducer } from './reducers/orderReducer'
import { filterReducer } from './reducers/filterReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	order: orderReducer,
	filter: filterReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
