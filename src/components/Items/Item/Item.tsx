import { FC, memo } from 'react'
import { IoCart, IoHeart } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IAlbum, ILike, IShowModal } from '../../../types/types'
import cn from 'classnames'
import styles from './Item.module.scss'
import { useActions } from 'src/hooks/useAction'

interface ItemProps {
	item: IAlbum
	like: boolean
	order: boolean
	onLike: ILike
	onShowModal: IShowModal
}

const Item: FC<ItemProps> = memo(
	({ item, like, order, onLike, onShowModal }) => {
		const isAuthenticated = useSelector(
			(state: any) => state.auth.isAuthenticated,
		)

		const { addToOrder } = useActions()

		const navigate = useNavigate()

		return (
			<div className={styles.item}>
				<img
					className={styles.img}
					src={process.env.PUBLIC_URL + `/img/${item.img}`}
					alt='img'
					onClick={() => onShowModal(item)}
					draggable={false}
				/>
				<h2
					className={styles.title}
					onClick={() => onShowModal(item)}
					title={item.title}
				>
					{item.title}
				</h2>
				<p className={styles.author}>{item.author}</p>
				<div className={styles.price}>
					<p>
						{Intl.NumberFormat('de-DE', {
							style: 'currency',
							currency: 'EUR',
						}).format(item.price)}
					</p>
					<div className={styles.btn_list}>
						<IoHeart
							className={cn(styles.btn_like, { [styles.active]: like })}
							onClick={() => {
								if (isAuthenticated) {
									onLike(item)
								} else {
									navigate('/MusicStore-React/profile')
								}
							}}
						/>
						<IoCart
							className={cn(styles.btn_cart, { [styles.active]: order })}
							onClick={() => addToOrder(item)}
						/>
					</div>
				</div>
			</div>
		)
	},
)

export default Item
