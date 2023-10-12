import React, { FC, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoCart, IoHeart } from 'react-icons/io5'
import {
	IAlbum,
	ILike,
	IShowModal,
	ISetLikes,
	ISetDraggableItem,
} from '../../../../types/types'
import cn from 'classnames'
import styles from './LikeItem.module.scss'
import { useActions } from 'src/hooks/useAction'

interface LikeItemProps {
	index: number
	like: IAlbum
	likes: IAlbum[]
	draggableItem: number
	onLike: ILike
	onShowModal: IShowModal
	setLikes: ISetLikes
	setDraggableItem: ISetDraggableItem
	order: boolean
}

const LikeItem: FC<LikeItemProps> = ({
	index,
	like,
	likes,
	draggableItem,
	onLike,
	onShowModal,
	setLikes,
	setDraggableItem,
	order,
}) => {
	const [show, setShow] = useState(true)
	const myRef = useRef<HTMLDivElement>(null)

	const { addToOrder } = useActions()

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		if (myRef.current) myRef.current.style.boxShadow = '0 4px 3px gray'
	}

	const dragLeaveHandler = () => {
		if (myRef.current) myRef.current.style.boxShadow = 'none'
	}

	const dragStartHandler = (index: number) => {
		setDraggableItem(index)
	}

	const dragEndHandler = () => {
		if (myRef.current) myRef.current.style.boxShadow = 'none'
	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>, index: number) => {
		e.preventDefault()

		if (myRef.current) {
			myRef.current.style.boxShadow = 'none'
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
			<div
				className={styles.item}
				ref={myRef}
				draggable={true}
				onDragOver={e => dragOverHandler(e)}
				onDragStart={() => dragStartHandler(index)}
				onDragLeave={dragLeaveHandler}
				onDragEnd={dragEndHandler}
				onDrop={e => dropHandler(e, index)}
			>
				<div>
					<img
						className={styles.img}
						src={process.env.PUBLIC_URL + `/img/${like.img}`}
						alt='img'
						onClick={() => onShowModal(like)}
						draggable={false}
					/>
				</div>
				<div className={styles.content}>
					<h2 className={styles.title} onClick={() => onShowModal(like)}>
						{like.title}
					</h2>
					<p className={styles.author}>{like.author}</p>
					<div className={styles.price}>
						<p>
							{Intl.NumberFormat('de-DE', {
								style: 'currency',
								currency: 'EUR',
							}).format(like.price)}
						</p>
						<div className={styles.btn_list}>
							<IoHeart
								className={cn(styles.btn_like, { [styles.active]: like })}
								onClick={() => {
									setShow(false)
									setTimeout(() => {
										onLike(like)
									}, 310)
								}}
							/>
							<IoCart
								className={cn(styles.btn_cart, { [styles.active]: order })}
								onClick={() => addToOrder(like)}
							/>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default LikeItem
