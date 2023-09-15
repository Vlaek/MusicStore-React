import { IState, UserAction } from '../../types/types'

const initialState: IState = {
	user: null,
	isAuthenticated: false,
}

export const authReducer = (state: IState = initialState, action: UserAction): IState => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		case 'LOGOUT':
			return {
				...state,
				user: null,
				isAuthenticated: false,
			}
		case 'REGISTER':
			localStorage.setItem(action.payload.email, JSON.stringify(action.payload))
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		case 'DELETE':
			localStorage.removeItem(action.payload.email)
			return {
				...state,
				user: null,
				isAuthenticated: false,
			}
		case 'CURRENT_USER':
			return {
				...state,
				user: null,
				isAuthenticated: false,
			}
		default:
			return state
	}
}
