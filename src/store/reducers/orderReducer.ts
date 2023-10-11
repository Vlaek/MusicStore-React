import { IAlbum, IOrder, IOrderHistory } from 'src/types/types'
import { OrderAction, OrderState } from '../types'

const initialState: OrderState = {
	orders: [],
	ordersHistory: [],
}

export const orderReducer = (
	state: OrderState = initialState,
	action: OrderAction,
) => {
	switch (action.type) {
		case 'SET_ORDER': {
			return {
				...state,
				orders: [action.payload],
			}
		}
		case 'ADD_TO_ORDER': {
			return {
				...state,
				orders: addToOrderReducer(state.orders, action.payload),
			}
		}
		case 'REMOVE_FROM_ORDER':
			return {
				...state,
				orders: removeFromOrderReducer(state.orders, action.payload),
			}
		case 'DELETE_ORDER':
			return {
				...state,
				orders: deleteOrderReducer(state.orders, action.payload),
			}
		case 'CLEAR_ORDER':
			return {
				...state,
				orders: [],
			}
		case 'MAKE_ORDER':
			return {
				...state,
				orders: [],
				ordersHistory: makeOrderReducer(state.ordersHistory, action.payload),
			}
		default:
			return state
	}
}

const addToOrderReducer = (orders: IOrder[], item: IAlbum) => {
	const index = orders.findIndex(order => order.id === item.id)
	if (index >= 0) {
		const newOrders = [...orders]
		newOrders[index].count += 1
		return newOrders
	} else {
		return [...orders, { ...item, count: 1 }]
	}
}

const deleteOrderReducer = (orders: IOrder[], id: number) => {
	return orders.filter(order => order.id !== id)
}

const makeOrderReducer = (
	ordersHistory: IOrderHistory[],
	data: {
		orders: IOrder[]
		price: number
	},
) => {
	let today = new Date()
	const newOrder: IOrderHistory = {
		id: ordersHistory.length + 1,
		order: data.orders,
		price: data.price,
		date: today.toLocaleString(),
	}
	return [...ordersHistory, newOrder]
}

const removeFromOrderReducer = (orders: IOrder[], item: IOrder) => {
	const index = orders.findIndex(order => order.id === item.id)
	if (index >= 0) {
		if (orders[index].count > 1) {
			const newOrders = [...orders]
			newOrders[index].count -= 1
			return newOrders
		} else {
			const newOrders = [...orders]
			newOrders.splice(index, 1)
			return newOrders
		}
	}
	return orders
}
