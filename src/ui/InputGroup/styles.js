import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 320px;
	max-width: 100%;

	&.success {
		input {
			border-color: ${({ theme }) => theme.colors.success500};
		}

		.info--con {
			color: ${({ theme }) => theme.colors.success500};

			svg rect {
				fill: ${({ theme }) => theme.colors.success500};
			}
		}
	}
	&.warning {
		input {
			border-color: ${({ theme }) => theme.colors.warning500};
		}

		.info--con {
			color: ${({ theme }) => theme.colors.warning500};

			svg rect {
				fill: ${({ theme }) => theme.colors.warning500};
			}
		}
	}
	&.error {
		input {
			border-color: ${({ theme }) => theme.colors.error500};
		}

		.info--con {
			color: ${({ theme }) => theme.colors.error500};

			svg rect {
				fill: ${({ theme }) => theme.colors.error500};
			}
		}
	}

	.hidden {
		display: none;
	}

	.input--group {
		position: relative;
	}

	label {
		color: ${({ theme }) => theme.colors.black};
		position: absolute;
		top: 0.375rem;
		left: 1rem;

		${({ size }) =>
			size === 'large' &&
			css`
				${({ theme }) => theme.mixins.text12};
			`}
		${({ size }) =>
			size === 'medium' &&
			css`
				${({ theme }) => theme.mixins.text10};
			`}

		span {
			color: ${({ theme }) => theme.colors.accent800};

			${({ size }) =>
				size === 'large' &&
				css`
					${({ theme }) => theme.mixins.text10};
				`}
			${({ size }) =>
				size === 'medium' &&
				css`
					${({ theme }) => theme.mixins.text8};
				`}
		}
	}

	input {
		${({ theme }) => theme.mixins.text14};

		border: 1px solid ${({ theme }) => theme.colors.neutral100};
		border-radius: 0.4rem;
		padding: 1.625rem 1rem 0.1875rem 2.75rem;
		outline: none;
		width: 100%;
		background: transparent;

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
			~ .info--con {
				opacity: 0.5;
			}
		}

		${({ size }) =>
			size === 'large' &&
			css`
				${({ theme }) => theme.mixins.text14};
			`}
		${({ size }) =>
			size === 'medium' &&
			css`
				${({ theme }) => theme.mixins.text12};

				padding: 1.625rem 1rem 0.1875rem 2.5rem;
			`}

		+ svg {
			--inputHeight: calc(
				(0.875rem * 2 + 0.1875rem * 2) / 2
			); // Padding and font size and line height of the input box

			position: absolute;
			bottom: var(--inputHeight);
			left: 1rem;
			transform: translateY(50%);

			${({ size }) =>
				size === 'medium' &&
				css`
					--inputHeight: calc((0.75rem * 2 + 0.1875rem * 2) / 2);

					width: 1rem;
				`}
		}
	}
	.info--con {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;

		${({ size }) =>
			size === 'large' &&
			css`
				${({ theme }) => theme.mixins.text12};
			`}
		${({ size }) =>
			size === 'medium' &&
			css`
				${({ theme }) => theme.mixins.text10};

				margin-top: 0.375rem;
			`}

		.info {
			.info--con {
				color: ${({ theme }) => theme.colors.neutral600};

				svg rect {
					fill: ${({ theme }) => theme.colors.neutral600};
				}
			}
		}
	}
`;
