import { IState, UserAction } from '../../types/types'

const initialState: IState = {
	user: null,
	isAuthenticated: false,
}

export const authReducer = (state: IState = initialState, action: UserAction): IState => {
	switch (action.type) {
		case 'LOGIN':
			localStorage.setItem('user', JSON.stringify(action.payload))
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		case 'LOGOUT':
			localStorage.removeItem('user')
			return {
				...state,
				user: null,
				isAuthenticated: false,
			}
		case 'REGISTER':
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		default:
			return state
	}
}
