import { IUser } from '../../types/types'

export const loginUser = (user: IUser) => ({
	type: 'LOGIN',
	payload: user,
})

export const logoutUser = () => ({
	type: 'LOGOUT',
})

export const registerUser = (user: IUser) => {
	return {
		type: 'REGISTER',
		payload: user,
	}
}

export const deleteUser = (user: IUser) => {
	return {
		type: 'DELETE',
		payload: user,
	}
}
