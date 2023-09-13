import { useState, useRef, FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { FaTrash } from 'react-icons/fa'
import OrderButton from './UI/OrderButton'
import { IAdd, IOrder, IDelete, IRemove, IShowModal } from './../types/types'

interface OrderProps {
	item: IOrder
	onShowModal: IShowModal
	onDelete: IDelete
	onAdd: IAdd
	onRemove: IRemove
}

const Order: FC<OrderProps> = ({ item, onShowModal, onDelete, onAdd, onRemove }) => {
	const [show, setShow] = useState(true)
	const myRef = useRef(null)
	return (
		<CSSTransition in={show} timeout={300} classNames='alert' nodeRef={myRef}>
			<div className='modal-order__item' ref={myRef}>
				<img
					className='modal-order__img'
					src={require(`../../public/img/${item.img}`)}
					alt='img'
					onClick={() => onShowModal(item)}
				/>
				<div className='modal-order__item__body'>
					<p
						className='modal-order__item__title'
						title={item.title}
						onClick={() => onShowModal(item)}
					>
						{item.title}
					</p>
					<p className='modal-order__item__author'>{item.author}</p>
					<p className='modal-order__item__price'>
						{Intl.NumberFormat('de-DE', {
							style: 'currency',
							currency: 'EUR',
						}).format(item.price)}
					</p>
					<FaTrash
						className='modal-order__item__delete-btn'
						onClick={() => {
							setShow(false)
							setTimeout(() => {
								onDelete(item.id)
							}, 300)
						}}
					/>
					<OrderButton item={item} onAdd={onAdd} onRemove={onRemove} />
				</div>
			</div>
		</CSSTransition>
	)
}

export default Order
