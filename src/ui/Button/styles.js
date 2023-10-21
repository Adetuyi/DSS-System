import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`;

export const StyledButton = styled.button`
	${({ theme }) => theme.mixins.text16};

	border-radius: 80px;
	min-height: 52px; // size === large
	padding: 0.625rem 1.25rem; //$variant === primary
	display: flex;
	align-items: center;
	gap: 0.5rem;

	:disabled {
		opacity: 0.3;
	}

	/* Variant start */
	${({ $variant }) =>
		$variant === 'primary' &&
		css`
			background: ${({ theme }) => theme.colors.primary600};
			color: ${({ theme }) => theme.colors.primary50};

			:hover {
				background: ${({ theme }) => theme.colors.primary700};
			}
			:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
				background: ${({ theme }) => theme.colors.primary600};
			}
		`};
	${({ $variant }) =>
		$variant === 'secondary' &&
		css`
			color: ${({ theme }) => theme.colors.primary700};
			border: 1px solid ${({ theme }) => theme.colors.primary700};
			background: transparent;

			:hover {
				color: ${({ theme }) => theme.colors.primary800};
				border-color: ${({ theme }) => theme.colors.primary800};
			}
			:focus {
				border-color: transparent;
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ $variant }) =>
		$variant === 'subtle' &&
		css`
			background: ${({ theme }) => theme.colors.primary200};
			color: ${({ theme }) => theme.colors.primary700};

			:hover {
				background: ${({ theme }) => theme.colors.primary300};
			}
			:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
				background: ${({ theme }) => theme.colors.primary100};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ $variant }) =>
		$variant === 'text' &&
		css`
			color: ${({ theme }) => theme.colors.primary700};
			background: transparent;

			:hover {
				color: ${({ theme }) => theme.colors.primary900};
			}
			:focus {
				color: ${({ theme }) => theme.colors.primary300};
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}
		`};
	/* Variant end */

	/* Size start */
	${({ size }) =>
		size === 'medium' &&
		css`
			${({ theme }) => theme.mixins.text14};

			min-height: 44px;
			padding: 0.5rem 1rem;
		`};
	${({ size }) =>
		size === 'small' &&
		css`
			${({ theme }) => theme.mixins.text14};

			min-height: 36px;
			padding: 0.25rem 1rem;
		`};
	/* Size end */

	.spinner {
		animation: ${rotate} 1s infinite linear;

		${({ $variant }) =>
			$variant !== 'primary' &&
			css`
				path {
					stroke: ${({ theme }) => theme.colors.primary700};
				}
			`};

		${({ size }) =>
			size === 'medium' &&
			css`
				width: 17px;
			`};
		${({ size }) =>
			size === 'small' &&
			css`
				width: 14px;
			`};
	}
`;
