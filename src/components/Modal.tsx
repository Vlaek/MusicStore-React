import { FC, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoCart, IoClose, IoHeart } from 'react-icons/io5'
import { IAdd, IAlbum, ILike, IShowModal } from '../types/types'

interface ModalProps {
	showModal: boolean
	showModalOrder: boolean
	item: IAlbum
	likes: IAlbum[]
	onLike: ILike
	onAdd: IAdd
	onShowModal: IShowModal
}

const Modal: FC<ModalProps> = (props) => {
	useEffect(() => {
		if (!props.showModal) document.body.style.overflow = 'visible'
		else document.body.style.overflow = 'hidden'
	}, [props.showModal])

	return (
		<CSSTransition timeout={300} in={props.showModal} unmountOnExit classNames='modal-item'>
			<div className={`modal-item `} onClick={() => props.onShowModal(props.item)}>
				{props.showModal && (
					<div className='modal__content' onClick={(e) => e.stopPropagation()}>
						<div className='modal__header'>
							<img
								src={require(`../../public/img/${props.item.img}`)}
								alt='img'
								className='modal__img'
							/>
							<div className='modal__information'>
								<h2 className='modal__title'>{props.item.title}</h2>
								<p className='modal__author'>{props.item.author}</p>
								<p className='modal__genre'>{props.item.genre}</p>
								<p className='modal__date'>{props.item.date}</p>
								<div className='modal__price'>
									<p className='modal__cost'>
										{Intl.NumberFormat('de-DE', {
											style: 'currency',
											currency: 'EUR',
										}).format(props.item.price)}
									</p>
									<div className='modal__btn-list'>
										<IoHeart
											className={`modal__btn-like ${
												props.likes.some((like) => like.id === props.item.id) && 'active'
											}`}
											onClick={() => props.onLike(props.item)}
										/>
										<IoCart
											className='modal__btn-cart'
											onClick={() => {
												props.onAdd(props.item)
												props.onShowModal(props.item)
											}}
										/>
									</div>
								</div>
							</div>
						</div>
						<p className='modal__desc'>{props.item.desc}</p>
						<div className='modal__tracklist'>
							{props.item.tracklist.map((track) => (
								<div className='modal__track' key={track.id}>
									<p className='modal__track-id'>{track.id}</p>
									<p className='modal__track-name'>{track.name}</p>
									<div className='modal__track-duration'>
										<p>{track.duration}</p>
									</div>
								</div>
							))}
						</div>
						<IoClose className='modal__btn-close' onClick={() => props.onShowModal(props.item)} />
					</div>
				)}
			</div>
		</CSSTransition>
	)
}

export default Modal
