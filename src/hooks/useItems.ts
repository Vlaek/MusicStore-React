import { useMemo } from 'react'
import { IAlbum } from './../types/types'

const filterItems = (items: IAlbum[], query: string, genre: string) => {
	let result = items

	if (query) {
		result = result.filter(
			item =>
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				item.author.toLowerCase().includes(query.toLowerCase()),
		)
	}

	if (genre) {
		result = result.filter(item => item.genre === genre)
	}

	return result
}

const sortItems = (items: IAlbum[], sort: string) => {
	if (sort) {
		return [...items].sort((a, b) => {
			const [aDay, aMonth, aYear] = a.date.split('.')
			const [bDay, bMonth, bYear] = b.date.split('.')
			if (sort === 'new') {
				return (
					new Date(`${bMonth}/${bDay}/${bYear}`).getTime() -
					new Date(`${aMonth}/${aDay}/${aYear}`).getTime()
				)
			} else {
				return (
					new Date(`${aMonth}/${aDay}/${aYear}`).getTime() -
					new Date(`${bMonth}/${bDay}/${bYear}`).getTime()
				)
			}
		})
	}

	return items
}

export const useItems = (items: IAlbum[], sort: string, query: string, genre: string) => {
	const filteredItems = useMemo(() => filterItems(items, query, genre), [items, query, genre])
	const sortedItems = useMemo(() => sortItems(filteredItems, sort), [filteredItems, sort])

	return sortedItems
}
