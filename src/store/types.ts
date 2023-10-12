import { IAlbum, IOrder, IOrderHistory, IUser } from 'src/types/types'

export interface ISaveUser {
	type: 'LOGIN'
	payload: IUser
}

export interface IRemoveUser {
	type: 'LOGOUT'
}

export interface IRegisterUser {
	type: 'REGISTER'
	payload: IUser
}

export interface IDeleteUser {
	type: 'DELETE'
	payload: IUser
}

export interface ICurrentUser {
	type: 'CURRENT_USER'
	payload: IUser
}

export type UserAction =
	| ISaveUser
	| IRemoveUser
	| IRegisterUser
	| IDeleteUser
	| ICurrentUser

export interface UserState {
	user: IUser | null
	isAuthenticated: boolean
}

export interface ISetOrder {
	type: 'SET_ORDER'
	payload: IOrder
}

export interface IMakeOrder {
	type: 'MAKE_ORDER'
	payload: { orders: IOrder[]; price: number }
}

export interface IAddToOrder {
	type: 'ADD_TO_ORDER'
	payload: IAlbum
}

export interface IRemoveOrder {
	type: 'REMOVE_FROM_ORDER'
	payload: IOrder
}

export interface IDeleteOrder {
	type: 'DELETE_ORDER'
	payload: number
}

export interface IClearOrder {
	type: 'CLEAR_ORDER'
}

export type OrderAction =
	| ISetOrder
	| IMakeOrder
	| IAddToOrder
	| IRemoveOrder
	| IDeleteOrder
	| IClearOrder

export interface OrderState {
	orders: IOrder[]
	ordersHistory: IOrderHistory[]
}

export interface IFilter {
	genre: string
	sort: string
	query: string
}

export interface ISetFilter {
	type: 'SET_FILTER'
	payload: IFilter
}

export type FilterAction = ISetFilter

export interface FilterState {
	filter: IFilter
}

// export type RootState = {
// 	auth: UserState
// 	order: OrderState
// 	filter: IFilter
// 	items: ItemState
// }
