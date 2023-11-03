import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	.page--header {
		h5 {
			font-weight: 700;
			margin-bottom: 0.5rem;
		}
		p {
			color: ${({ theme }) => theme.colors.neutral500};

			span {
				color: ${({ theme }) => theme.colors.black};
				font-weight: 600;
			}
			${maxQuery('lg')} {
				display: none;
			}
		}
	}
`;
