import { FC } from 'react'
import LikeItem from '../../LikeItem'
import {
	IAlbum,
	ISetLikes,
	IShowModal,
	ISetDraggableItem,
	ILike,
	IAdd,
} from './../../../types/types'

interface MyLikesProps {
	likes: IAlbum[]
	draggableItem: number
	addToOrder: IAdd
	likeItem: ILike
	onShowModal: IShowModal
	setLikes: ISetLikes
	setDraggableItem: ISetDraggableItem
}

const MyLikes: FC<MyLikesProps> = ({
	likes,
	setLikes,
	draggableItem,
	setDraggableItem,
	likeItem,
	addToOrder,
	onShowModal,
}) => {
	return (
		<div className='profile-items'>
			{likes.length > 0 ? (
				<div className='profile-items__list'>
					{likes.map((like, index) => (
						<LikeItem
							like={like}
							draggableItem={draggableItem}
							setDraggableItem={setDraggableItem}
							likes={likes}
							index={index}
							key={like.id}
							onLike={likeItem}
							onAddToOrder={addToOrder}
							onShowModal={onShowModal}
							setLikes={setLikes}
						/>
					))}
				</div>
			) : (
				<div className='profile-items__empty'>Пусто :(</div>
			)}
		</div>
	)
}

export default MyLikes
