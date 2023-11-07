import { useNavigate } from 'react-router-dom';
import { Approutes } from '../../constants';
import { useEffect } from 'react';

const Dashboard = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(Approutes.dashboard.student, { replace: true });
	}, [navigate]);
};
export default Dashboard;
