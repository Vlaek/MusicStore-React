import { FC, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import ModalOrder from './components/ModalOrder/ModalOrder'
import { OrdersContext } from './context/context'
import { IAlbum, IOrdersContext } from './types/types'

const App: FC = () => {
	const [showModalOrder, setShowModalOrder] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [fullItem, setFullItem] = useState<IAlbum>({
		id: 0,
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
		likeItem,
		onShowModal,
		setLikes,
	}

	return (
		<OrdersContext.Provider value={OrdersContextContent}>
			<Router>
				<div className='wrapper'>
					<Header onShowModalOrder={onShowModalOrder} />
					<AppRouter />
					<ModalOrder
						showModalOrder={showModalOrder}
						onShowModalOrder={onShowModalOrder}
						onShowModal={onShowModal}
					/>
					<Modal
						item={fullItem}
						likes={likes}
						showModal={showModal}
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
