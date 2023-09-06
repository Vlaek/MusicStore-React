import { FC, useState, useContext, useEffect } from 'react'
import Tabs from '../components/UI/Tabs/Tabs'
import { OrdersContext } from '../context/context'
import profilePhoto from '../img/Vlek.jpg'
import { IOrdersContext, IUser } from './../types/types'
import MyProfile from '../components/UI/Tabs/MyProfile'
import MyLikes from '../components/UI/Tabs/MyLikes'
import MyOrders from '../components/UI/Tabs/MyOrders'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logoutUser, registerUser } from '../store/reducers/authActions'
import Auth from '../components/UI/Tabs/Auth'

const Profile: FC = () => {
	const { likes, ordersHistory, likeItem, onShowModal, addToOrder, setLikes } = useContext(
		OrdersContext,
	) as IOrdersContext
	const [draggableItem, setDraggableItem] = useState<number>(0)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
	const dispatch = useDispatch()

	useEffect(() => {
		const userString = localStorage.getItem('user')
		if (userString) {
			const user = JSON.parse(userString)
			dispatch(loginUser(user))
		}
	}, [dispatch])

	const handleLogin = (user: IUser) => {
		dispatch(loginUser(user))
		localStorage.setItem('user', JSON.stringify(user))
	}

	const handleLogout = () => {
		dispatch(logoutUser())
		localStorage.removeItem('user')
	}

	const handleRegister = (user: IUser) => {
		dispatch(registerUser(user))
		localStorage.setItem('user', JSON.stringify(user))
	}

	const tabs = [
		{
			title: 'Мои данные',
			content: isAuthenticated ? (
				<MyProfile profilePhoto={profilePhoto} handleLogout={handleLogout} />
			) : (
				<Auth handleLogin={handleLogin} handleRegister={handleRegister} />
			),
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
