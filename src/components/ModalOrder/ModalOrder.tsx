import { FC, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoClose } from 'react-icons/io5'
import Order from './Order/Order'
import {
	IAdd,
	IOrder,
	IShowModalOrder,
	IShowModal,
	IRemove,
	IDelete,
	IMakeOrder,
	IClearOrder,
} from '../../types/types'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import styles from './ModalOrder.module.scss'

interface ModalOrderProps {
	showModalOrder: boolean
	orders: IOrder[]
	onShowModalOrder: IShowModalOrder
	onAdd: IAdd
	onRemove: IRemove
	onDelete: IDelete
	onShowModal: IShowModal
	onMakeOrder: IMakeOrder
	onClear: IClearOrder
}

const ModalOrder: FC<ModalOrderProps> = ({
	showModalOrder,
	orders,
	onShowModalOrder,
	onAdd,
	onRemove,
	onDelete,
	onShowModal,
	onMakeOrder,
	onClear,
}) => {
	const summa = orders.reduce(
		(summa, order) => summa + order.price * order.count,
		0,
	)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (!showModalOrder) {
			setIsOpen(false)
			document.body.style.overflow = 'visible'
		} else {
			document.body.style.overflow = 'hidden'
		}
	}, [showModalOrder])

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

	return (
		<CSSTransition
			timeout={300}
			in={showModalOrder}
			unmountOnExit
			classNames={{
				enter: styles.modal_enter,
				enterActive: styles.modal_enter_active,
				exit: styles.modal_exit,
				exitActive: styles.modal_exit_active,
			}}
			onEntered={() => setIsOpen(true)}
		>
			<div
				className={styles.modal}
				onClick={() => {
					onShowModalOrder()
				}}
			>
				<CSSTransition
					in={isOpen}
					timeout={200}
					classNames={{
						enter: styles.content_enter,
						enterActive: styles.content_enter_active,
						enterDone: styles.content_enter_done,
						exit: styles.content_exit,
						exitActive: styles.content_exit_active,
					}}
				>
					<div className={styles.content} onClick={e => e.stopPropagation()}>
						<div>
							{orders.length ? (
								<div className={styles.container}>
									<div className={styles.header}>
										<p className={styles.summa}>
											Сумма:{' '}
											{Intl.NumberFormat('de-DE', {
												style: 'currency',
												currency: 'EUR',
											}).format(summa)}
										</p>
									</div>
									<div className={styles.body}>
										{orders.map(order => (
											<Order
												key={order.id}
												item={order}
												onAdd={onAdd}
												onRemove={onRemove}
												onDelete={onDelete}
												onShowModal={onShowModal}
											/>
										))}
									</div>
									<div className={styles.footer}>
										{isAuthenticated ? (
											<button
												className={styles.btn}
												onClick={() => {
													onMakeOrder(orders, summa)
													onClear()
												}}
											>
												К оформлению
											</button>
										) : (
											<Link to='/MusicStore-React/profile'>
												<button
													className={styles.btn}
													onClick={() => onShowModalOrder()}
												>
													Авторизоваться
												</button>
											</Link>
										)}
									</div>
								</div>
							) : (
								<div className={styles.empty}>
									<p className={styles.empty__title}>Ой, пусто!</p>
									<p className={styles.empty__text}>
										Ваша корзина пуста, откройте "Меню" и выберите понравившийся
										товар.
									</p>
								</div>
							)}
							<IoClose
								className={styles.btn_close}
								onClick={() => onShowModalOrder()}
							/>
						</div>
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>
	)
}

export default ModalOrder
