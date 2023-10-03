import { FC } from 'react'
import LikeItem from './LikeItem/LikeItem'
import {
	IAlbum,
	ISetLikes,
	IShowModal,
	ISetDraggableItem,
	ILike,
	IAdd,
} from '../../../types/types'
import styles from './MyLikes.module.scss'
import { IOrder } from './../../../types/types'

interface MyLikesProps {
	likes: IAlbum[]
	setLikes: ISetLikes
	draggableItem: number
	setDraggableItem: ISetDraggableItem
	likeItem: ILike
	addToOrder: IAdd
	onShowModal: IShowModal
	orders: IOrder[]
}

const MyLikes: FC<MyLikesProps> = ({
	likes,
	setLikes,
	draggableItem,
	setDraggableItem,
	likeItem,
	addToOrder,
	onShowModal,
	orders,
}) => {
	return (
		<div className={styles.items}>
			{likes.length > 0 ? (
				<div className={styles.list}>
					{likes.map((like, index) => (
						<LikeItem
							key={like.id}
							like={like}
							index={index}
							likes={likes}
							setLikes={setLikes}
							draggableItem={draggableItem}
							setDraggableItem={setDraggableItem}
							onLike={likeItem}
							onAddToOrder={addToOrder}
							onShowModal={onShowModal}
							order={orders.some(order => order.id === like.id)}
						/>
					))}
				</div>
			) : (
				<div className={styles.empty}>Пусто :(</div>
			)}
		</div>
	)
}

export default MyLikes
