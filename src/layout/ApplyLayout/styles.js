import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	display: flex;
	height: 100vh;

	main {
		flex: 1;
		overflow: auto;
		padding: 2rem 2rem 1rem;

		${maxQuery('md')} {
			padding: 2rem 1rem;
		}
	}
`;
