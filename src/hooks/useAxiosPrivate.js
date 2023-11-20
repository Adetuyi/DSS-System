import { useEffect } from 'react';
import { useAuth, useNotify, useRefreshToken } from '.';
import { axiosPrivate } from '../library';
import { useQueryClient } from '@tanstack/react-query';

const useAxiosPrivate = () => {
	const { authTokens, setAuthTokens, setUser } = useAuth();
	const notify = useNotify();
	const refresh = useRefreshToken();
	const queryClient = useQueryClient();

	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(config) => {
				config.headers = config.headers ?? {};

				if (!config?.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${authTokens?.access}`;
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
						const { data: tokens } = await refresh();

						setAuthTokens(tokens);
						localStorage.setItem('authTokens', tokens);

						prevRequest = {
							...prevRequest,
							headers: {
								...prevRequest.headers,
								Authorization: `Bearer ${tokens?.access}`,
							},
						};

						return axiosPrivate(prevRequest);
					} catch (error) {
						if (error?.response?.status === 401) {
							notify({ message: 'Your session has expired. Please log in again', toastOptions: { toastId: 'session_expired' } });

							queryClient.clear();
							setAuthTokens(null);
							setUser(null);
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
	}, [authTokens, setAuthTokens, refresh, queryClient, setUser, notify]);

	return axiosPrivate;
};

export default useAxiosPrivate;
