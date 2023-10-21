import { useAuth } from '.';
import { Appurls } from '../constants';
import { axios } from '../library';

const useRefreshToken = () => {
	const { auth } = useAuth();

	const refresh = () =>
		axios.post(Appurls.auth.refresh_token, {
			refresh: auth?.refresh || localStorage.getItem('refresh'),
		});

	return refresh;
};

export default useRefreshToken;
