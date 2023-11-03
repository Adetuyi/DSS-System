import Navbar from '../Navbar';
import { Container } from './styles';
import { Outlet } from 'react-router-dom';

const ApplyLayout = () => {
	return (
		<Container>
			<Navbar />

			<main>
				<Outlet />
			</main>
		</Container>
	);
};

export default ApplyLayout;
