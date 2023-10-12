import { FC } from 'react'
import LikeItem from './LikeItem/LikeItem'
import {
	IAlbum,
	ISetLikes,
	IShowModal,
	ISetDraggableItem,
	ILike,
} from '../../../types/types'
import styles from './MyLikes.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'

interface MyLikesProps {
	likes: IAlbum[]
	setLikes: ISetLikes
	draggableItem: number
	setDraggableItem: ISetDraggableItem
	likeItem: ILike
	onShowModal: IShowModal
}

const MyLikes: FC<MyLikesProps> = ({
	likes,
	setLikes,
	draggableItem,
	setDraggableItem,
	likeItem,
	onShowModal,
}) => {
	const orders = useSelector((state: RootState) => state.order.orders)

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
