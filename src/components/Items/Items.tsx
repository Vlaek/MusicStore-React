import { FC, memo } from 'react'
import Item from './Item/Item'
import { IAlbum, IOrder, IAdd, ILike, IShowModal } from '../../types/types'
import styles from './Items.module.scss'

interface ItemsProps {
	items: IAlbum[]
	likes: IAlbum[]
	orders: IOrder[]
	onAdd: IAdd
	onLike: ILike
	onShowModal: IShowModal
}

const Items: FC<ItemsProps> = memo(({ items, likes, orders, onAdd, onLike, onShowModal }) => {
	return (
		<main>
			{items.length ? (
				<div className={styles.list}>
					{items.map(item => (
						<Item
							key={item.id}
							item={item}
							like={likes.some(like => like.id === item.id)}
							order={orders.some(order => order.id === item.id)}
							onAdd={onAdd}
							onLike={onLike}
							onShowModal={onShowModal}
						/>
					))}
				</div>
			) : (
				<div className={styles.empty}>
					<p className={styles.empty__title}>К сожалению, таких товаров не найдено :(</p>
					<p className={styles.empty__subtitle}>Попробуйте поиск по другому параметру</p>
				</div>
			)}
		</main>
	)
})

export default Items
