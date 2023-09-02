import { FC } from 'react'
import Accordion from '../../Accordion'
import { IOrderHistory, IShowModal } from './../../../types/types'

interface MyOrdersProps {
	ordersHistory: IOrderHistory[]
	onShowModal: IShowModal
}

const MyOrders: FC<MyOrdersProps> = ({ ordersHistory, onShowModal }) => {
	return (
		<div className='orders-history'>
			{ordersHistory.length > 0 ? (
				ordersHistory.map((order) => (
					<div key={order.date}>
						<Accordion
							header={
								<div className='orders-history__header'>
									<div className='orders-history__order'>
										Заказ №<b>{order.id}</b> от <b>{order.date}</b>.{' '}
									</div>
									<div className='orders-history__payment'>
										К оплате:
										<b>{` ${Intl.NumberFormat('de-DE', {
											style: 'currency',
											currency: 'EUR',
										}).format(order.price)}`}</b>
									</div>
								</div>
							}
							content={
								<div>
									<div className='profile-items__list-2'>
										{order.order.map((item) => (
											<div key={item.id} className='profile-items__item gray'>
												<div className='profile-items__img'>
													<img
														src={require(`../../../../public/img/${item.img}`)}
														alt='img'
														onClick={() => onShowModal(item)}
													/>
												</div>
												<div className='profile-items__content'>
													<h2 className='profile-items__title' onClick={() => onShowModal(item)}>
														{item.title}
													</h2>
													<p className='profile-items__author'>{item.author}</p>
													<div className='profile-items__price'>
														<p>
															{`${Intl.NumberFormat('de-DE', {
																style: 'currency',
																currency: 'EUR',
																currencyDisplay: 'symbol',
															}).format(item.price)} x ${item.count}`}
														</p>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							}
						/>
					</div>
				))
			) : (
				<div className='profile-items__empty'>Пусто :(</div>
			)}
		</div>
	)
}

export default MyOrders
