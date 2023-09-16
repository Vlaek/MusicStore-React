import { FC } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IRemove, IOrder, IAdd } from '../../../types/types'
import styles from './OrderButton.module.scss'

interface OrderButtonProps {
	item: IOrder
	onRemove: IRemove
	onAdd: IAdd
}

const OrderButton: FC<OrderButtonProps> = ({ item, onRemove, onAdd }) => {
	return (
		<div className={styles.count}>
			<FaMinus className={styles.btn_count} onClick={() => onRemove(item)} />
			<p>{item.count}</p>
			<FaPlus className={styles.btn_count} onClick={() => onAdd(item)} />
		</div>
	)
}

export default OrderButton
