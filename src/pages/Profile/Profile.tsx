import { FC, useState, useContext, useEffect } from 'react'
import Tabs from '../../components/Tabs/Tabs'
import { OrdersContext } from '../../context/context'
import { IOrdersContext } from '../../types/types'
import MyProfile from '../../components/Tabs/MyProfile/MyProfile'
import MyLikes from '../../components/Tabs/MyLikes/MyLikes'
import MyOrders from '../../components/Tabs/MyOrders/MyOrders'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../store/actions/authActions'
import Auth from '../../components/Tabs/Auth/Auth'
import { Helmet } from 'react-helmet'
import 'react-toastify/dist/ReactToastify.css'
import styles from './Profile.module.scss'

const Profile: FC = () => {
	const {
		likes,
		orders,
		ordersHistory,
		likeItem,
		onShowModal,
		addToOrder,
		setLikes,
	} = useContext(OrdersContext) as IOrdersContext
	const [draggableItem, setDraggableItem] = useState<number>(0)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const isAuthenticated = useSelector(
		(state: any) => state.auth.isAuthenticated,
	)
	const dispatch = useDispatch()

	useEffect(() => {
		const userString = localStorage.getItem('current_user')
		if (userString) {
			const user = JSON.parse(userString)
			dispatch(loginUser(user))
		}
	}, [dispatch])

	const tabs = [
		{
			title: 'Мои данные',
			content: isAuthenticated ? <MyProfile /> : <Auth />,
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
					orders={orders}
				/>
			),
			authTab: isAuthenticated,
		},
		{
			title: 'Мои заказы',
			content: (
				<MyOrders ordersHistory={ordersHistory} onShowModal={onShowModal} />
			),
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
