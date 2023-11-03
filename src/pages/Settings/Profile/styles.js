import styled from 'styled-components';
import { StyledButton, StyledInputGroup } from '../../../ui';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 2rem 2rem 1rem;
	border-radius: 1rem;

	h6 {
		color: #23262f;
	}
	h5 {
		color: #23262f;
	}

	p {
		font-size: 0.875rem;
		color: #777e91;
	}

	.profile-details {
		margin-top: 1rem;

		> div {
			:first-child {
				margin-bottom: 1rem;
				border-bottom: 1px solid #e6e8ec;
			}

			form {
				padding: 1rem 0;
			}
			${StyledInputGroup} {
				:not(:last-child) {
					margin-bottom: 1rem;
				}
			}

			${StyledButton} {
				margin-top: 2rem;
				font-size: 0.875rem;
			}
		}
	}
`;