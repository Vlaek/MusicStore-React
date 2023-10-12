import { FC } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IOrder } from '../../../types/types'
import styles from './OrderButton.module.scss'
import { useActions } from 'src/hooks/useAction'

interface OrderButtonProps {
	item: IOrder
}

const OrderButton: FC<OrderButtonProps> = ({ item }) => {
	const { addToOrder, removeFromOrder } = useActions()

	return (
		<div className={styles.count}>
			<FaMinus
				className={styles.btn_count}
				onClick={() => removeFromOrder(item)}
			/>
			<p>{item.count}</p>
			<FaPlus className={styles.btn_count} onClick={() => addToOrder(item)} />
		</div>
	)
}

export default OrderButton
