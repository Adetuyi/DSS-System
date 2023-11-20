import { useLocation, useNavigate } from 'react-router-dom';
import { Approutes } from '../../constants';
import { useEffect } from 'react';
import { useAuth } from '../../hooks';

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const { authTokens } = useAuth();

	useEffect(() => {
		if (!authTokens || !authTokens?.access) {
			navigate(`${Approutes.auth.login}?next=${location.pathname}`, {
				replace: true,
			});
		}
	}, [navigate, location, authTokens]);

	return children;
};

export default RequireAuth;
