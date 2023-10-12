import { useState, useRef, FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { FaTrash } from 'react-icons/fa'
import OrderButton from '../OrderButton/OrderButton'
import { IOrder, IShowModal } from './../../../types/types'
import styles from './Order.module.scss'
import { useActions } from 'src/hooks/useAction'

interface OrderProps {
	item: IOrder
	onShowModal: IShowModal
}

const Order: FC<OrderProps> = ({ item, onShowModal }) => {
	const [show, setShow] = useState(true)

	const myRef = useRef(null)

	const { deleteOrder } = useActions()

	return (
		<CSSTransition
			in={show}
			timeout={300}
			classNames={{
				enter: styles.item_enter,
				enterActive: styles.item_enter_active,
				enterDone: styles.item_enter_done,
				exit: styles.item_exit,
				exitActive: styles.item_exit_active,
			}}
			nodeRef={myRef}
		>
			<div className={styles.item} ref={myRef}>
				<img
					className={styles.img}
					src={process.env.PUBLIC_URL + `/img/${item.img}`}
					alt='img'
					onClick={() => onShowModal(item)}
					draggable={false}
				/>
				<div className={styles.body}>
					<p
						className={styles.title}
						title={item.title}
						onClick={() => onShowModal(item)}
					>
						{item.title}
					</p>
					<p className={styles.author}>{item.author}</p>
					<p className={styles.price}>
						{Intl.NumberFormat('de-DE', {
							style: 'currency',
							currency: 'EUR',
						}).format(item.price)}
					</p>
					<FaTrash
						className={styles.btn_delete}
						onClick={() => {
							setShow(false)
							setTimeout(() => {
								deleteOrder(item.id)
							}, 300)
						}}
					/>
					<OrderButton item={item} />
				</div>
			</div>
		</CSSTransition>
	)
}

export default Order
