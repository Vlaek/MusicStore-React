import { FC } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { IRemove, IOrder, IAdd } from './../../types/types'

interface OrderButtonProps {
	item: IOrder
	onRemove: IRemove
	onAdd: IAdd
}

const OrderButton: FC<OrderButtonProps> = (props) => {
	return (
		<div className='modal-order__item__count'>
			<FaMinus
				className='modal-order__item__count__btn'
				onClick={() => props.onRemove(props.item)}
			/>
			<p>{props.item.count}</p>
			<FaPlus className='modal-order__item__count__btn' onClick={() => props.onAdd(props.item)} />
		</div>
	)
}

export default OrderButton
