import { FC, useState, useContext, useEffect } from 'react'
import Tabs from '../components/UI/Tabs/Tabs'
import { OrdersContext } from '../context/context'
import profilePhoto from '../img/User.png'
import { IOrdersContext, IUser } from './../types/types'
import MyProfile from '../components/UI/Tabs/MyProfile'
import MyLikes from '../components/UI/Tabs/MyLikes'
import MyOrders from '../components/UI/Tabs/MyOrders'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logoutUser, registerUser } from '../store/reducers/authActions'
import Auth from '../components/UI/Tabs/Auth/Auth'
import { Helmet } from 'react-helmet'

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
		const userString = localStorage.getItem('current_user')
		if (userString) {
			const user = JSON.parse(userString)
			dispatch(loginUser(user))
		}
	}, [dispatch])

	const handleLogin = (user: IUser) => {
		localStorage.setItem('current_user', JSON.stringify(user))
		dispatch(loginUser(user))
	}

	const handleLogout = () => {
		localStorage.removeItem('current_user')
		dispatch(logoutUser())
	}

	const handleRegister = (user: IUser) => {
		localStorage.setItem('current_user', JSON.stringify(user))
		dispatch(registerUser(user))
	}

	const tabs = [
		{
			title: 'Мои данные',
			content: isAuthenticated ? (
				<MyProfile profilePhoto={profilePhoto} handleLogout={handleLogout} />
			) : (
				<Auth handleLogin={handleLogin} handleRegister={handleRegister} />
			),
			authTab: isAuthenticated,
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
			authTab: isAuthenticated,
		},
		{
			title: 'Мои заказы',
			content: <MyOrders ordersHistory={ordersHistory} onShowModal={onShowModal} />,
			authTab: isAuthenticated,
		},
	]
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<meta name='description' content='music store react cabinet' />
				<title>Music Store - Личный кабинет</title>
			</Helmet>
			<div className='container'>
				<div className='cabinet'>
					<h1 className='cabinet__title'>Личный кабинет</h1>
					<Tabs tabs={tabs} />
				</div>
			</div>
		</>
	)
}

export default Profile
