import apiUrl from '../apiConfig'
import axios from 'axios'

export const catCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/cats',
		data: {
			cat: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}