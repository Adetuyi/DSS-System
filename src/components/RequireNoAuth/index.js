import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Approutes } from '../../constants';
import { useEffect } from 'react';
import { useAuth } from '../../hooks';

const RequireNoAuth = ({ children }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { authTokens } = useAuth();

	useEffect(() => {
		if (authTokens && authTokens?.access) {
			navigate(searchParams.get('next') || Approutes.home, {
				replace: true,
			});
		}
	}, [navigate, location, searchParams, authTokens]);

	return children;
};

export default RequireNoAuth;
