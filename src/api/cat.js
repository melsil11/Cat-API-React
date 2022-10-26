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

export const catIndex = ( user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/cats',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const catShow = (user, id) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/cats/' + id,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const catUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/cats/' + id,
        data: {
            cat: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const  catDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/cats/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}