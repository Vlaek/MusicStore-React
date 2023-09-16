import { FC, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import ModalOrder from './components/ModalOrder/ModalOrder'
import { OrdersContext } from './context/context'
import { IAlbum, IOrder, IOrderHistory, IOrdersContext } from './types/types'

const App: FC = () => {
	const [orders, setOrders] = useState<IOrder[]>([])
	const [ordersHistory, setOrdersHistory] = useState<IOrderHistory[]>([])
	const [showModalOrder, setShowModalOrder] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [fullItem, setFullItem] = useState<IAlbum>({
		id: -1,
		title: '',
		author: '',
		tracklist: [],
		img: '',
		desc: '',
		genre: '',
		date: '',
		price: 0,
	})
	const [likes, setLikes] = useState<IAlbum[]>([])

	const onShowModal = (item: IAlbum) => {
		setFullItem(item)
		setShowModal(!showModal)
	}

	const onShowModalOrder = () => {
		setShowModalOrder(!showModalOrder)
	}

	const makeOrder = (orders: IOrder[], price: number) => {
		let today = new Date()
		const newOrder = {
			id: ordersHistory.length + 1,
			order: orders,
			price: price,
			date: today.toLocaleString(),
		}
		setOrdersHistory(prevOrders => [...prevOrders, newOrder])
	}

	const addToOrder = (item: IAlbum) => {
		setOrders(prevOrders => {
			const index = prevOrders.findIndex(order => order.id === item.id)
			if (index >= 0) {
				const newOrders = [...prevOrders]
				newOrders[index].count += 1
				return newOrders
			} else {
				return [...prevOrders, { ...item, count: 1 }]
			}
		})
	}

	const deleteOrder = (id: number) => {
		setOrders(prevOrders => prevOrders.filter(order => order.id !== id))
	}

	const clearOrder = () => {
		setOrders([])
	}

	const removeFromOrder = (item: IOrder) => {
		setOrders(prevOrders => {
			const index = prevOrders.findIndex(order => order.id === item.id)
			if (index >= 0 && prevOrders[index].count > 1) {
				const newOrders = [...prevOrders]
				newOrders[index].count -= 1
				return newOrders
			} else if (index >= 0 && prevOrders[index].count === 1) {
				const newOrders = [...prevOrders]
				newOrders.splice(index, 1)
				return newOrders
			} else {
				return prevOrders
			}
		})
	}

	const likeItem = (item: IAlbum) => {
		let isInArray = false
		likes.forEach(like => {
			if (like.id === item.id) isInArray = true
			setLikes(likes.filter(like => like.id !== item.id))
		})
		if (!isInArray) setLikes([...likes, item])
	}

	const OrdersContextContent: IOrdersContext = {
		likes,
		orders,
		ordersHistory,
		addToOrder,
		likeItem,
		onShowModal,
		setLikes,
	}

	return (
		<OrdersContext.Provider value={OrdersContextContent}>
			<Router>
				<div className='wrapper'>
					<Header orders={orders} onShowModalOrder={onShowModalOrder} />
					<AppRouter />
					<ModalOrder
						orders={orders}
						showModalOrder={showModalOrder}
						onMakeOrder={makeOrder}
						onClear={clearOrder}
						onDelete={deleteOrder}
						onShowModalOrder={onShowModalOrder}
						onShowModal={onShowModal}
						onAdd={addToOrder}
						onRemove={removeFromOrder}
					/>
					<Modal
						item={fullItem}
						likes={likes}
						showModal={showModal}
						onAdd={addToOrder}
						onLike={likeItem}
						onShowModal={setShowModal}
					/>
					<Footer />
				</div>
			</Router>
		</OrdersContext.Provider>
	)
}

export default App
