import { FC, memo } from 'react'
import { IoCart, IoHeart } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IAlbum, IAdd, ILike, IShowModal } from './../types/types'

interface ItemProps {
	item: IAlbum
	like: boolean
	order: boolean
	onAdd: IAdd
	onLike: ILike
	onShowModal: IShowModal
}

const Item: FC<ItemProps> = memo(({ item, like, order, onAdd, onLike, onShowModal }) => {
	const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
	const navigate = useNavigate()

	return (
		<div className='item'>
			<img
				className='item__img'
				src={require(`../../public/img/${item.img}`)}
				alt='img'
				onClick={() => onShowModal(item)}
			/>
			<h2 className='item__title' onClick={() => onShowModal(item)} title={item.title}>
				{item.title}
			</h2>
			<p className='item__author'>{item.author}</p>
			<div className='item__price'>
				<p>
					{Intl.NumberFormat('de-DE', {
						style: 'currency',
						currency: 'EUR',
					}).format(item.price)}
				</p>
				<div className='item__btn-list'>
					<IoHeart
						className={`item__btn-like ${like && 'active'}`}
						onClick={() => {
							if (isAuthenticated) {
								onLike(item)
							} else {
								navigate('/MusicStore-React/profile')
							}
						}}
					/>
					<IoCart className={`item__btn-cart ${order && 'active'}`} onClick={() => onAdd(item)} />
				</div>
			</div>
		</div>
	)
})

export default Item
