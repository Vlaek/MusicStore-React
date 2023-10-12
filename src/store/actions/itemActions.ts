import axios from 'axios'
import { Dispatch } from 'redux'
import { ItemAction, ItemActionTypes } from '../../types/item'

export const fetchItems = (): any => {
	return async (dispatch: Dispatch<ItemAction>) => {
		try {
			dispatch({ type: ItemActionTypes.FETCH_ITEMS })
			const response = await axios.get(
				'https://64c9ec74b2980cec85c28b5f.mockapi.io/music',
			)
			setTimeout(() => {
				dispatch({
					type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
					payload: response.data,
				})
			}, 500)
		} catch (e) {
			dispatch({
				type: ItemActionTypes.FETCH_ITEMS_ERROR,
				payload: 'Произошла ошибка при загрузке альбомов',
			})
		}
	}
}
