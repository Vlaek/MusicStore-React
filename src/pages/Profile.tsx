import { FC, useState, useContext, useEffect } from 'react'
import Tabs from '../components/UI/Tabs/Tabs'
import { OrdersContext } from '../context/context'
import profilePhoto from '../img/Vlek.jpg'
import { IOrdersContext } from './../types/types'
import MyProfile from '../components/UI/Tabs/MyProfile'
import MyLikes from '../components/UI/Tabs/MyLikes'
import MyOrders from '../components/UI/Tabs/MyOrders'

const Profile: FC = () => {
	const { likes, ordersHistory, likeItem, onShowModal, addToOrder, setLikes } = useContext(
		OrdersContext
	) as IOrdersContext
	const [draggableItem, setDraggableItem] = useState<number>(0)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const tabs = [
		{
			title: 'Мои данные',
			content: <MyProfile profilePhoto={profilePhoto} />,
		},
		{
			title: 'Мои отложенные',
			content: (
				<MyLikes
					likes={likes}
					likeItem={likeItem}
					addToOrder={addToOrder}
					setLikes={setLikes}
					draggableItem={draggableItem}
					setDraggableItem={setDraggableItem}
					onShowModal={onShowModal}
				/>
			),
		},
		{
			title: 'Мои заказы',
			content: <MyOrders ordersHistory={ordersHistory} onShowModal={onShowModal} />,
		},
	]
	return (
		<div className='container'>
			<div className='cabinet'>
				<h1 className='cabinet__title'>Личный кабинет</h1>
				<Tabs tabs={tabs} />
			</div>
		</div>
	)
}

export default Profile
