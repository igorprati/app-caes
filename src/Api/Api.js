export const Api = {
	baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

	authorization: 'igorprati@gmail.com',

	createUrl: () => Api.baseUrl + '/',
	deleteUrl: (id) => Api.baseUrl + '/' + id,
	deleteAllUrl: () => Api.baseUrl + '/',
	readUrl: () => Api.baseUrl + '/',
	updateUrl: id => Api.baseUrl + '/' + id,

	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: 'POST',
			headers: new Headers({
				Authorization: Api.authorization,
				'Content-type': 'application/json'
			}),
			body: JSON.stringify(body)
		})
	},

	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: 'DELETE',
			headers: new Headers({
				Authorization: Api.authorization
			})
		})
	},

	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: 'GET',
			headers: new Headers({
				Authorization: Api.authorization
			})
		})
	},

	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: 'PUT',
			headers: new Headers({
				Authorization: Api.authorization,
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(body)
		})
	}

	
}