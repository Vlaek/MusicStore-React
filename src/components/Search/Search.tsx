import React, { FC, useRef } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import styles from './Search.module.scss'

interface SearchProps {
	setFilter: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<SVGElement, MouseEvent>
			| undefined,
	) => void
}

const Search: FC<SearchProps> = ({ setFilter }) => {
	const ref = useRef<HTMLInputElement>(null)

	const clickHandler = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		if (ref.current != null) {
			ref.current.value = ''
		}
		setFilter(e)
	}

	return (
		<div className={styles.search}>
			<input
				className={styles.input}
				placeholder='Найти'
				onChange={e => setFilter(e)}
				ref={ref}
			/>
			<IoCloseSharp className={styles.btn_clear} onClick={clickHandler} />
		</div>
	)
}

export default Search
