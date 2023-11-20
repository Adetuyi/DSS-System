import { useAuth } from '.';
import { Appurls } from '../constants';
import { axios } from '../library';

const useRefreshToken = () => {
	const { authTokens } = useAuth();

	const refresh = () =>
		axios.post(Appurls.auth.refresh_token, {
			refresh: authTokens?.refresh,
		});

	return refresh;
};

export default useRefreshToken;
