import styled from 'styled-components';

export const StyledInputGroup = styled.div`
	position: relative;

	:focus-within {
		label {
			color: #4060ea;
		}
		input,
		textarea {
			outline: 1.5px solid #4060ea;
		}
	}
	/* label {
		color: #494848;
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 120%;
		margin-bottom: 0.5rem;
		display: block;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		padding: 1rem 1.5rem;
		font-family: inherit;
		font-size: 0.875rem;
		line-height: 130%;
		border-radius: 0.125rem;
		border: 1px solid rgba(229, 229, 229, 0.7);
		background: rgba(229, 229, 229, 0.1);
	} */
	textarea {
		resize: vertical;
	}
	.action-con {
		position: absolute;
		bottom: 1rem;
		right: 0.75rem;
		display: grid;
		cursor: pointer;

		svg:not(.active) {
			display: none;
		}
	}

	label {
		position: absolute;
		top: 0.375rem;
		left: 1rem;
		line-height: 120%;
		font-size: 0.75rem;

		span {
			color: ${({ theme }) => theme.colors.accent800};
		}
	}

	input {
		font-size: 0.875rem;
		line-height: 120%;
		outline: none;
		width: 100%;
		background: transparent;
		border-radius: 0.25rem;
		border: 1px solid #dadada;
		padding: 1.75rem 1rem 0.5rem;

		:focus {
			border: 1px solid ${({ theme }) => theme.colors.primary700};
		}
		:blank ~ label {
			color: ${({ theme }) => theme.colors.neutral500};
		}
		:disabled {
			color: ${({ theme }) => theme.colors.neutral400};
			background: ${({ theme }) => theme.colors.neutral50};

			~ label {
				&,
				span {
					color: ${({ theme }) => theme.colors.neutral400};
				}
			}
		}
		&[type='password']:valid {
			letter-spacing: 0.175rem;
		}
	}
`;
