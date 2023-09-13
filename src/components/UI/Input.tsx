import React, { FC } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

interface InputProps {
	setFilter: (
		e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<SVGElement, MouseEvent> | undefined,
	) => void
}

const Input: FC<InputProps> = ({ setFilter }) => {
	const clickHandler = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		const input = document.querySelector('.search__input') as HTMLInputElement | null
		if (input != null) {
			input.value = ''
		}
		setFilter(e)
	}

	return (
		<div className='search'>
			<input className='search__input' placeholder='Найти' onChange={e => setFilter(e)} />
			<IoCloseSharp className='search__btn-close' onClick={clickHandler} />
		</div>
	)
}

export default Input
