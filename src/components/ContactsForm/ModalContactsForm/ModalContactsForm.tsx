import { FC, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { FaRegSmileWink } from 'react-icons/fa'
import styles from './ModalContactsForm.module.scss'

interface ModalContactsFormProps {
	showModal: boolean
	onShowModal: (showModal: boolean) => void
	name: string
}

const ModalContactsForm: FC<ModalContactsFormProps> = ({ showModal, onShowModal, name }) => {
	useEffect(() => {
		if (!showModal) document.body.style.overflow = 'visible'
		else document.body.style.overflow = 'hidden'
	}, [showModal])

	return (
		<CSSTransition
			timeout={300}
			in={showModal}
			unmountOnExit
			classNames={{
				enter: styles.modal_enter,
				enterActive: styles.modal_enter_active,
				exit: styles.modal_exit,
				exitActive: styles.modal_exit_active,
			}}
		>
			<div className={styles.modal} onClick={() => onShowModal(false)}>
				{showModal && (
					<div className={styles.content} onClick={e => e.stopPropagation()}>
						<div className={styles.header}>
							<FaRegSmileWink className={styles.smile} />
						</div>
						<div className={styles.body}>
							<p className={styles.text}>Спасибо!</p>
							<p className={styles.text}>{name}, Ваша заявка успешно принята.</p>
							<p className={styles.text}>Наш специалист скоро с Вами свяжется!</p>
						</div>
						<div className={styles.footer}>
							<button className={styles.button} onClick={() => onShowModal(false)}>
								Хорошо
							</button>
						</div>
					</div>
				)}
			</div>
		</CSSTransition>
	)
}

export default ModalContactsForm
