import { FC, MouseEvent, useState } from 'react'
import classNames from 'classnames'
import styles from './Categories.module.scss'

interface CategoriesProps {
	categories: Category[]
	setCategory: (genre: string) => void
}

interface Category {
	key: string
	name: string
}

const Categories: FC<CategoriesProps> = ({ categories, setCategory }) => {
	const [activeCategory, setActiveCategory] = useState<string>(categories[0].key)

	return (
		<div className={styles.categories}>
			{categories.map(category => (
				<div
					className={classNames(styles.category, {
						[styles.active]: category.key === activeCategory,
					})}
					key={category.key}
					onClick={(e: MouseEvent<HTMLElement>) => {
						setCategory(category.key)
						setActiveCategory(category.key)
					}}
				>
					{category.name}
				</div>
			))}
		</div>
	)
}

export default Categories
