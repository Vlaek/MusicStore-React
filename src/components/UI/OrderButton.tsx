import { FC } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IRemove, IOrder, IAdd } from './../../types/types'

interface OrderButtonProps {
	item: IOrder
	onRemove: IRemove
	onAdd: IAdd
}

const OrderButton: FC<OrderButtonProps> = ({ item, onRemove, onAdd }) => {
	return (
		<div className='modal-order__item__count'>
			<FaMinus className='modal-order__item__count__btn' onClick={() => onRemove(item)} />
			<p>{item.count}</p>
			<FaPlus className='modal-order__item__count__btn' onClick={() => onAdd(item)} />
		</div>
	)
}

export default OrderButton
