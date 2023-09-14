import React, { FC, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoCart, IoHeart } from 'react-icons/io5'
import { IAdd, IAlbum, ILike, IShowModal, ISetLikes, ISetDraggableItem } from './../types/types'

interface LikeItemProps {
	index: number
	like: IAlbum
	likes: IAlbum[]
	draggableItem: number
	onAddToOrder: IAdd
	onLike: ILike
	onShowModal: IShowModal
	setLikes: ISetLikes
	setDraggableItem: ISetDraggableItem
}

const LikeItem: FC<LikeItemProps> = ({
	index,
	like,
	likes,
	draggableItem,
	onAddToOrder,
	onLike,
	onShowModal,
	setLikes,
	setDraggableItem,
}) => {
	const [show, setShow] = useState(true)
	const myRef = useRef(null)

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const target = e.target as HTMLElement
		;(target.closest('.profile-items__item') as HTMLElement).style.boxShadow = '0 4px 3px gray'
	}

	const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		const target = e.target as HTMLElement
		;(target.closest('.profile-items__item') as HTMLElement).style.boxShadow = 'none'
	}

	const dragStartHandler = (index: number) => {
		setDraggableItem(index)
	}

	const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
		const target = e.target as HTMLElement
		;(target.closest('.profile-items__item') as HTMLElement).style.boxShadow = 'none'
	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>, index: number) => {
		e.preventDefault()
		const target = e.target as HTMLElement
		;(target.closest('.profile-items__item') as HTMLElement).style.boxShadow = 'none'
		if (target.closest('.profile-items__item') as HTMLElement) {
			const draggedItem = likes[draggableItem]
			const remainingItems = likes.filter((_item, i) => i !== draggableItem)
			const updatedItems = [
				...remainingItems.slice(0, index),
				draggedItem,
				...remainingItems.slice(index),
			]
			setLikes(updatedItems)
		}
	}

	return (
		<CSSTransition in={show} timeout={300} classNames='alert' nodeRef={myRef}>
			<div
				className='profile-items__item'
				ref={myRef}
				draggable={true}
				onDragOver={e => dragOverHandler(e)}
				onDragStart={() => dragStartHandler(index)}
				onDragLeave={e => dragLeaveHandler(e)}
				onDragEnd={e => dragEndHandler(e)}
				onDrop={e => dropHandler(e, index)}
			>
				<div className='profile-items__img'>
					<img
						src={require(`../../public/img/${like.img}`)}
						alt='img'
						onClick={() => onShowModal(like)}
					/>
				</div>
				<div className='profile-items__content'>
					<h2 className='profile-items__title' onClick={() => onShowModal(like)}>
						{like.title}
					</h2>
					<p className='profile-items__author'>{like.author}</p>
					<div className='profile-items__price'>
						<p>
							{Intl.NumberFormat('de-DE', {
								style: 'currency',
								currency: 'EUR',
							}).format(like.price)}
						</p>
						<div className='profile-items__btn-list'>
							<IoHeart
								className={`profile-items__btn-like ${like && 'active'}`}
								onClick={() => {
									setShow(false)
									setTimeout(() => {
										onLike(like)
									}, 310)
								}}
							/>
							<IoCart className='profile-items__btn-cart' onClick={() => onAddToOrder(like)} />
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default LikeItem
