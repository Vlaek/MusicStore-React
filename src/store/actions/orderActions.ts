import { IAlbum, IOrder } from '../../types/types'

export const setOrder = (order: IOrder) => ({
	type: 'SET_ORDER',
	payload: order,
})

export const addToOrder = (item: IAlbum) => ({
	type: 'ADD_TO_ORDER',
	payload: item,
})

export const deleteOrder = (id: number) => ({
	type: 'DELETE_ORDER',
	payload: id,
})

export const clearOrder = () => ({
	type: 'CLEAR_ORDER',
})

export const makeOrder = (orders: IOrder[], price: number) => ({
	type: 'MAKE_ORDER',
	payload: { orders, price },
})

export const removeFromOrder = (item: IOrder) => ({
	type: 'REMOVE_FROM_ORDER',
	payload: item,
})
