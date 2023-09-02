export const useItems = (items, sort, query, genre) => {
	let filteredItems = items
	if (query) {
		filteredItems = items.filter(
			(item) =>
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				item.author.toLowerCase().includes(query.toLowerCase())
		)
	}

	if (genre) {
		filteredItems = [...filteredItems].filter((item) => item.genre === genre)
	}

	if (sort) {
		filteredItems.sort((a, b) => {
			const [aDay, aMonth, aYear] = a.date.split('.')
			const [bDay, bMonth, bYear] = b.date.split('.')
			if (sort === 'new') {
				return new Date(`${bMonth}/${bDay}/${bYear}`) - new Date(`${aMonth}/${aDay}/${aYear}`)
			} else {
				return new Date(`${aMonth}/${aDay}/${aYear}`) - new Date(`${bMonth}/${bDay}/${bYear}`)
			}
		})
	}

	return filteredItems
}
