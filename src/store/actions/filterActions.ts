import { IFilter } from '../types'

export const setFilter = (filter: IFilter) => ({
	type: 'SET_FILTER',
	payload: filter,
})
