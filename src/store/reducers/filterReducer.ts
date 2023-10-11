import { FilterAction, IFilter } from '../types'

const initialState: IFilter = {
	genre: '',
	sort: 'new',
	query: '',
}

export const filterReducer = (state = initialState, action: FilterAction) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.payload
		default:
			return state
	}
}
