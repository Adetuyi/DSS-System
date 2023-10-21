import jwtDecode from 'jwt-decode';
import useAuth from './useAuth';

const useDecodedUser = () => {
	const { auth } = useAuth();
	let token = auth?.access || localStorage.getItem('access') || '';

	return token ? jwtDecode(token) : undefined;
};

export default useDecodedUser;
