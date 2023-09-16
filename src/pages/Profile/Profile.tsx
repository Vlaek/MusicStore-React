import { FC, useState, useContext, useEffect } from 'react'
import Tabs from '../../components/Tabs/Tabs'
import { OrdersContext } from '../../context/context'
import { IOrdersContext, IUser } from '../../types/types'
import MyProfile from '../../components/Tabs/MyProfile/MyProfile'
import MyLikes from '../../components/Tabs/MyLikes/MyLikes'
import MyOrders from '../../components/Tabs/MyOrders/MyOrders'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, loginUser, logoutUser, registerUser } from '../../store/reducers/authActions'
import Auth from '../../components/Tabs/Auth/Auth'
import { Helmet } from 'react-helmet'
import 'react-toastify/dist/ReactToastify.css'
import styles from './Profile.module.scss'

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

	const handleDelete = (user: IUser) => {
		localStorage.removeItem('current_user')
		dispatch(deleteUser(user))
	}

	const tabs = [
		{
			title: 'Мои данные',
			content: isAuthenticated ? (
				<MyProfile handleLogout={handleLogout} handleDelete={handleDelete} />
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
			<div className={styles.container}>
				<div className={styles.profile}>
					<h1 className={styles.profile__title}>Личный кабинет</h1>
					<Tabs tabs={tabs} />
				</div>
			</div>
		</>
	)
}

export default Profile
