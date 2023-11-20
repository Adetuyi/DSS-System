import { useNavigate } from 'react-router-dom';
import { Loader } from '../../ui';
import { Container } from './styles';
import { useAuth, useNotify } from '../../hooks';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Approutes } from '../../constants';

const Logout = () => {
	const notify = useNotify();
	const navigate = useNavigate();
	const { setAuthTokens, setUser } = useAuth();
	const queryClient = useQueryClient();

	useEffect(() => {
		setUser(null);
		setAuthTokens(null);

		queryClient.clear();
		localStorage.clear();

		navigate(Approutes.auth.login);
		notify({ message: "You've been logged out successfully", status: 'success', toastOptions: { toastId: 'logged_out' } });
	}, [queryClient, setAuthTokens, setUser, navigate, notify]);

	return (
		<Container>
			<Loader />
		</Container>
	);
};
export default Logout;
