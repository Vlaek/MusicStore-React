import { FC, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { IoCart, IoClose, IoHeart } from 'react-icons/io5'
import { IAlbum, ILike } from '../../types/types'
import classNames from 'classnames'
import styles from './Modal.module.scss'
import { useActions } from 'src/hooks/useAction'

interface ModalProps {
	showModal: boolean
	item: IAlbum
	likes: IAlbum[]
	onLike: ILike
	onShowModal: (showModal: boolean) => void
}

const Modal: FC<ModalProps> = ({
	showModal,
	item,
	likes,
	onLike,
	onShowModal,
}) => {
	const { addToOrder } = useActions()

	useEffect(() => {
		if (!showModal) document.body.style.overflow = 'visible'
		else document.body.style.overflow = 'hidden'
	}, [showModal])

	return (
		<CSSTransition
			timeout={500}
			in={showModal}
			unmountOnExit
			classNames={{
				enter: styles.item_enter,
				enterActive: styles.item_enter_active,
				exit: styles.item_exit,
				exitActive: styles.item_exit_active,
			}}
		>
			<div className={styles.item} onClick={() => onShowModal(false)}>
				<div className={styles.content} onClick={e => e.stopPropagation()}>
					<div className={styles.header}>
						<img
							src={process.env.PUBLIC_URL + `/img/${item.img}`}
							alt='img'
							className={styles.img}
							draggable={false}
						/>
						<div className={styles.information}>
							<h2 className={styles.title}>{item.title}</h2>
							<p className={styles.author}>{item.author}</p>
							<p className={styles.genre}>{item.genre}</p>
							<p className={styles.date}>{item.date}</p>
							<div className={styles.price}>
								<p className={styles.cost}>
									{Intl.NumberFormat('de-DE', {
										style: 'currency',
										currency: 'EUR',
									}).format(item.price)}
								</p>
								<div className={styles.btn_list}>
									<IoHeart
										className={classNames(styles.btn_like, {
											[styles.active]: likes.some(like => like.id === item.id),
										})}
										onClick={() => onLike(item)}
									/>
									<IoCart
										className={styles.btn_cart}
										onClick={() => {
											addToOrder(item)
											onShowModal(false)
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					<p className={styles.desc}>{item.desc}</p>
					<div className={styles.tracklist}>
						{item.tracklist.map(track => (
							<div className={styles.track} key={track.id}>
								<p className={styles.track_id}>{track.id}</p>
								<p className={styles.track_name}>{track.name}</p>
								<div className={styles.track_duration}>
									<p>{track.duration}</p>
								</div>
							</div>
						))}
					</div>
					<IoClose
						className={styles.btn_close}
						onClick={() => onShowModal(false)}
					/>
				</div>
			</div>
		</CSSTransition>
	)
}

export default Modal
