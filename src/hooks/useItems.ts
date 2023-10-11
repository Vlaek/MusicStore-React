import { useMemo, useEffect, useState } from 'react'
import { IAlbum } from './../types/types'
import useDebounce from './useDebounce'
import { IFilter } from 'src/store/types'

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

export const useItems = (items: IAlbum[], filter: IFilter) => {
	const { sort, query, genre } = filter

	const debouncedQuery = useDebounce(query, 500)

	const [filteredItems, setFilteredItems] = useState(items)

	useEffect(() => {
		let result = items

		if (debouncedQuery || genre) {
			result = filterItems(items, debouncedQuery, genre)
		}

		setFilteredItems(result)
	}, [debouncedQuery, items, genre])

	const sortedItems = useMemo(
		() => sortItems(filteredItems, sort),
		[filteredItems, sort],
	)

	return sortedItems
}
