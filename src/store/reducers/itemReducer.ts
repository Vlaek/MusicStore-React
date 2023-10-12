import { ItemAction, ItemActionTypes, ItemState } from 'src/types/item'

const initialState: ItemState = {
	items: [],
	isLoading: false,
	error: null,
}

export const itemReducer = (
	state = initialState,
	actions: ItemAction,
): ItemState => {
	switch (actions.type) {
		case ItemActionTypes.FETCH_ITEMS:
			return { isLoading: true, error: null, items: [] }
		case ItemActionTypes.FETCH_ITEMS_SUCCESS:
			return { isLoading: false, error: null, items: actions.payload }
		case ItemActionTypes.FETCH_ITEMS_ERROR:
			return { isLoading: false, error: actions.payload, items: [] }
		default:
			return state
	}
}
