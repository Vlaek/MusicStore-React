import { FC, useState } from 'react'

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
		<div className='accordion'>
			<div className={`accordion-header ${isOpen && 'active'}`} onClick={toggleAccordion}>
				{header}
				<div className='arrow'></div>
			</div>
			<div className={`accordion-content ${isOpen && 'active'}`}>{content}</div>
		</div>
	)
}

export default Accordion
