import { FC, memo } from 'react'
import Item from './Item/Item'
import { IAlbum, ILike, IShowModal } from '../../types/types'
import styles from './Items.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'

interface ItemsProps {
	items: IAlbum[]
	likes: IAlbum[]
	onLike: ILike
	onShowModal: IShowModal
}

const Items: FC<ItemsProps> = memo(({ items, likes, onLike, onShowModal }) => {
	const orders = useSelector((state: RootState) => state.order.orders)
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
							onLike={onLike}
							onShowModal={onShowModal}
						/>
					))}
				</div>
			) : (
				<div className={styles.empty}>
					<p className={styles.empty__title}>
						К сожалению, таких товаров не найдено :(
					</p>
					<p className={styles.empty__subtitle}>
						Попробуйте поиск по другому параметру
					</p>
				</div>
			)}
		</main>
	)
})

export default Items
