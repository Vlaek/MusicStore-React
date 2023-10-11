import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authReducer } from './reducers/authReducer'
import thunk from 'redux-thunk'
import { orderReducer } from './reducers/orderReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	order: orderReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
