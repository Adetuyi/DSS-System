import { useEffect } from 'react';
import { axios } from '../library';
import { useLocation, useNavigate } from 'react-router-dom';
import { Approutes } from '../constants';

const useAxios = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		const requestInterceptor = axios.interceptors.request.use(
			(response) => {
				const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]')?.value;
				console.log('Token: ', csrftoken);

				response.headers['X-CSRFToken'] = csrftoken;

				return response;
			},
			(error) => error
		);

		const responseInterceptor = axios.interceptors.response.use(
			(response) => {
				return response;
			},
			(err) => {
				if (err && err.response) {
					if (err.response.status === 401) {
						navigate(`${Approutes.auth.login}?next=${pathname}`, {
							replace: true,
						});
					}

					return Promise.reject(err);
				}
			}
		);

		return () => {
			axios.interceptors.response.eject(responseInterceptor);
			axios.interceptors.request.eject(requestInterceptor);
		};
	}, [navigate, pathname]);

	return axios;
};

export default useAxios;
