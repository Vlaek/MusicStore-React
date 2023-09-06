import { FC, MouseEvent } from 'react'

interface CategoriesProps {
	categories: Category[]
	setCategory: ISetCategory
}

interface Category {
	key: string
	name: string
}

interface ISetCategory {
	(genre: string): void
}

const Categories: FC<CategoriesProps> = props => {
	return (
		<div className='categories'>
			{props.categories.map((category, index) => (
				<div
					className={index === 0 ? 'category active' : 'category'}
					key={category.key}
					onClick={(e: MouseEvent<HTMLElement>) => {
						props.setCategory(category.key)
						const categories = (e.target as any).parentNode
						const categoryItems = categories.querySelectorAll('.category.active')
						categoryItems.forEach((item: HTMLDivElement) => item.classList.remove('active'))
						;(e.target as Element).classList.add('active')
					}}
				>
					{category.name}
				</div>
			))}
		</div>
	)
}

export default Categories
