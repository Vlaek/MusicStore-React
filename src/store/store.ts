import { createStore, combineReducers, applyMiddleware } from 'redux'
import { authReducer } from './reducers/authReducer'
import thunk from 'redux-thunk'
import { orderReducer } from './reducers/orderReducer'
import { filterReducer } from './reducers/filterReducer'
import { itemReducer } from './reducers/itemReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	order: orderReducer,
	filter: filterReducer,
	items: itemReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
