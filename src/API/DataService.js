import axios from 'axios';

export default class DataService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://64c9ec74b2980cec85c28b5f.mockapi.io/music', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response
    }
}