import { PageHeader } from '../../components';
import { getDateTime } from '../../utilities';
import { Container } from './styles';

const HomePage = () => {
	return (
		<Container>
			<PageHeader>
				<div className="page--header">
					<h4>Welcome back, Daniella 🌞</h4>
					<p>
						This is your stats today - <span>{getDateTime(new Date(), 'mm dd yyyy')}</span>
					</p>
				</div>
			</PageHeader>
		</Container>
	);
};

export default HomePage;
