import { IState, UserAction } from '../../types/types'

const initialState: IState = {
	user: null,
	isAuthenticated: false,
}

export const authReducer = (
	state: IState = initialState,
	action: UserAction,
): IState => {
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('current_user', JSON.stringify(action.payload))
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		case 'LOGOUT':
			localStorage.removeItem('current_user')
			return {
				...state,
				user: null,
				isAuthenticated: false,
			}
		case 'REGISTER':
			localStorage.setItem(action.payload.email, JSON.stringify(action.payload))
			localStorage.setItem('current_user', JSON.stringify(action.payload))
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		case 'DELETE':
			localStorage.removeItem(action.payload.email)
			localStorage.removeItem('current_user')
			return {
				...state,
				user: null,
				isAuthenticated: false,
			}
		default:
			return state
	}
}
