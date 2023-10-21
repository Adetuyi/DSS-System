import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import { Container } from './styles';

const ApplyLayout = () => {
	return (
		<Container>
			<Navbar />

			<section>
				<Outlet />
			</section>
		</Container>
	);
};

export default ApplyLayout;
