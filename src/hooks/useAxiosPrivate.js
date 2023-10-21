import { useEffect } from 'react';
import { useAuth, useNotify, useRefreshToken } from '.';
import { axiosPrivate } from '../library';

const useAxiosPrivate = () => {
	const { auth, setAuth } = useAuth();
	const notify = useNotify();
	const refresh = useRefreshToken();

	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(config) => {
				config.headers = config.headers ?? {};

				if (!config?.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${auth?.access || localStorage.getItem('access')}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseInterceptor = axiosPrivate.interceptors.response.use(
			(response) => response,

			async (error) => {
				let prevRequest = error?.config;

				if (error?.response?.status === 401 && !prevRequest.hasSent) {
					prevRequest.hasSent = true;

					try {
						const {
							data: { access: newAccessToken },
						} = await refresh();

						setAuth((prev) => ({ ...prev, access: newAccessToken }));
						localStorage.setItem('access', newAccessToken);

						prevRequest = {
							...prevRequest,
							headers: {
								...prevRequest.headers,
								Authorization: `Bearer ${newAccessToken}`,
							},
						};

						return axiosPrivate(prevRequest);
					} catch (error) {
						if (error?.response?.status === 401) {
							notify({ message: 'Your session has expired. Please log in again', toastOptions: { toastId: 'session_expired' } });

							setAuth({});
							localStorage.clear();
						}
					}
				}

				return Promise.reject(error);
			}
		);

		return () => {
			axiosPrivate.interceptors.response.eject(responseInterceptor);
			axiosPrivate.interceptors.request.eject(requestInterceptor);
		};
	}, [auth, setAuth, refresh, notify]);

	return axiosPrivate;
};

export default useAxiosPrivate;
