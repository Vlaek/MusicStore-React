import { FC } from 'react'
import Accordion from '../../Accordion/Accordion'
import { IShowModal } from '../../../types/types'
import styles from './MyOrders.module.scss'
import { RootState } from 'src/store/store'
import { useSelector } from 'react-redux'

interface MyOrdersProps {
	onShowModal: IShowModal
}

const MyOrders: FC<MyOrdersProps> = ({ onShowModal }) => {
	const ordersHistory = useSelector(
		(state: RootState) => state.order.ordersHistory,
	)

	return (
		<div className={styles.history}>
			{ordersHistory.length > 0 ? (
				ordersHistory.map(order => (
					<div key={order.date}>
						<Accordion
							header={
								<div className={styles.history__header}>
									<div className={styles.history__order}>
										Заказ №<b>{order.id}</b> от <b>{order.date}</b>.{' '}
									</div>
									<div className={styles.history__payment}>
										К оплате:
										<b>{` ${Intl.NumberFormat('de-DE', {
											style: 'currency',
											currency: 'EUR',
										}).format(order.price)}`}</b>
									</div>
								</div>
							}
							content={
								<div className={styles.list}>
									{order.order.map(item => (
										<div key={item.id} className={styles.item}>
											<div>
												<img
													className={styles.img}
													src={process.env.PUBLIC_URL + `/img/${item.img}`}
													alt='img'
													onClick={() => onShowModal(item)}
													draggable={false}
												/>
											</div>
											<div className={styles.content}>
												<h2
													className={styles.title}
													onClick={() => onShowModal(item)}
												>
													{item.title}
												</h2>
												<p className={styles.author}>{item.author}</p>
												<div className={styles.price}>
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
							}
						/>
					</div>
				))
			) : (
				<div className={styles.empty}>Пусто :(</div>
			)}
		</div>
	)
}

export default MyOrders
