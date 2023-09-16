import { FC, useState } from 'react'
import styles from './Accordion.module.scss'
import classNames from 'classnames'

interface AccordionProps {
	header: JSX.Element
	content: JSX.Element
}

const Accordion: FC<AccordionProps> = ({ header, content }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.accordion}>
			<div
				className={classNames(styles.header, { [styles.active]: isOpen })}
				onClick={toggleAccordion}
			>
				{header}
				<div className={styles.arrow}></div>
			</div>
			<div className={classNames(styles.content, { [styles.active]: isOpen })}>{content}</div>
		</div>
	)
}

export default Accordion
