import axios from 'axios';
import Cookies from 'js-cookie';
const BASE_URL = 'http://127.0.0.1:8000/api';

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json', 'X-CSRFToken': Cookies.get('csrftoken') },
});

axiosInstance.interceptors.request.use(
	(response) => {
		const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]')?.value;
		console.log('Token: ', csrftoken);

		response.headers['X-CSRFToken'] = csrftoken;

		return response;
	},
	(error) => error
);

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json', 'X-CSRFToken': Cookies.get('csrftoken') },
});

export default axiosInstance;
