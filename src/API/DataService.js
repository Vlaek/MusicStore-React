import axios from 'axios'

export default class DataService {
	static async getAll(limit = '', page = '', filter = '', genre = '') {
		const response = await axios.get('https://64c9ec74b2980cec85c28b5f.mockapi.io/music', {
			params: {
				filter: filter,
				search: genre,
				order: 'date',
				limit: limit,
				page: page,
			},
		})
		return response
	}
}
