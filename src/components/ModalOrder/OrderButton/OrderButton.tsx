import { FC } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IOrder } from '../../../types/types'
import styles from './OrderButton.module.scss'
import { useDispatch } from 'react-redux'
import { addToOrder, removeFromOrder } from 'src/store/actions/orderActions'

interface OrderButtonProps {
	item: IOrder
}

const OrderButton: FC<OrderButtonProps> = ({ item }) => {
	const dispatch = useDispatch()
	return (
		<div className={styles.count}>
			<FaMinus
				className={styles.btn_count}
				onClick={() => dispatch(removeFromOrder(item))}
			/>
			<p>{item.count}</p>
			<FaPlus
				className={styles.btn_count}
				onClick={() => dispatch(addToOrder(item))}
			/>
		</div>
	)
}

export default OrderButton
