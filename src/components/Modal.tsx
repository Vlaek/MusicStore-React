import { FC, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoCart, IoClose, IoHeart } from 'react-icons/io5'
import { IAdd, IAlbum, ILike, IShowModal } from '../types/types'

interface ModalProps {
	showModal: boolean
	item: IAlbum
	likes: IAlbum[]
	onLike: ILike
	onAdd: IAdd
	onShowModal: IShowModal
}

const Modal: FC<ModalProps> = ({ showModal, item, likes, onLike, onAdd, onShowModal }) => {
	useEffect(() => {
		if (!showModal) document.body.style.overflow = 'visible'
		else document.body.style.overflow = 'hidden'
	}, [showModal])

	return (
		<CSSTransition timeout={300} in={showModal} unmountOnExit classNames='modal-item'>
			<div className={'modal-item'} onClick={() => onShowModal(item)}>
				{showModal && (
					<div className='modal__content' onClick={e => e.stopPropagation()}>
						<div className='modal__header'>
							<img src={require(`../../public/img/${item.img}`)} alt='img' className='modal__img' />
							<div className='modal__information'>
								<h2 className='modal__title'>{item.title}</h2>
								<p className='modal__author'>{item.author}</p>
								<p className='modal__genre'>{item.genre}</p>
								<p className='modal__date'>{item.date}</p>
								<div className='modal__price'>
									<p className='modal__cost'>
										{Intl.NumberFormat('de-DE', {
											style: 'currency',
											currency: 'EUR',
										}).format(item.price)}
									</p>
									<div className='modal__btn-list'>
										<IoHeart
											className={`modal__btn-like ${
												likes.some(like => like.id === item.id) && 'active'
											}`}
											onClick={() => onLike(item)}
										/>
										<IoCart
											className='modal__btn-cart'
											onClick={() => {
												onAdd(item)
												onShowModal(item)
											}}
										/>
									</div>
								</div>
							</div>
						</div>
						<p className='modal__desc'>{item.desc}</p>
						<div className='modal__tracklist'>
							{item.tracklist.map(track => (
								<div className='modal__track' key={track.id}>
									<p className='modal__track-id'>{track.id}</p>
									<p className='modal__track-name'>{track.name}</p>
									<div className='modal__track-duration'>
										<p>{track.duration}</p>
									</div>
								</div>
							))}
						</div>
						<IoClose className='modal__btn-close' onClick={() => onShowModal(item)} />
					</div>
				)}
			</div>
		</CSSTransition>
	)
}

export default Modal
