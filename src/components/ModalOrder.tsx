import { FC, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoClose } from 'react-icons/io5'
import Order from './Order'
import {
	IAdd,
	IOrder,
	IShowModalOrder,
	IShowModal,
	IRemove,
	IDelete,
	IMakeOrder,
	IClearOrder,
} from './../types/types'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../store/reducers/authActions'
import { Link } from 'react-router-dom'

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
	const summa = orders.reduce((summa, order) => summa + order.price * order.count, 0)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (!showModalOrder) {
			setIsOpen(false)
			document.body.style.overflow = 'visible'
		} else {
			document.body.style.overflow = 'hidden'
		}
	}, [showModalOrder])

	const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
	const dispatch = useDispatch()

	useEffect(() => {
		const userString = localStorage.getItem('user')
		if (userString) {
			const user = JSON.parse(userString)
			dispatch(loginUser(user))
		}
	}, [dispatch])

	return (
		<CSSTransition
			timeout={100}
			in={showModalOrder}
			unmountOnExit
			classNames='modal-order'
			onEntered={() => setIsOpen(true)}
		>
			<div
				className='modal-order'
				onClick={() => {
					onShowModalOrder()
				}}
			>
				<CSSTransition in={isOpen} timeout={200} classNames='modal-order__content'>
					<div className='modal-order__content' onClick={e => e.stopPropagation()}>
						{showModalOrder && (
							<div>
								{orders.length ? (
									<div className='modal-order__container'>
										<div className='modal-order__header'>
											<p className='summa'>
												Сумма:{' '}
												{Intl.NumberFormat('de-DE', {
													style: 'currency',
													currency: 'EUR',
												}).format(summa)}
											</p>
										</div>
										<div className='modal-order__body'>
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
										<div className='modal-order__footer'>
											{isAuthenticated ? (
												<button
													className='modal-order__button'
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
														className='modal-order__button'
														onClick={() => onShowModalOrder()}
													>
														Авторизоваться
													</button>
												</Link>
											)}
										</div>
									</div>
								) : (
									<div className='modal-order__empty'>
										<p className='modal-order__empty__title'>Ой, пусто!</p>
										<p className='modal-order__empty__text'>
											Ваша корзина пуста, откройте "Меню" и выберите понравившийся товар.
										</p>
									</div>
								)}
								<IoClose className='modal-order__btn-close' onClick={() => onShowModalOrder()} />
							</div>
						)}
					</div>
				</CSSTransition>
			</div>
		</CSSTransition>
	)
}

export default ModalOrder
