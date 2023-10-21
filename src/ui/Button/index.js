import { Spinner } from '../../assets/svgs';
import { StyledButton } from './styles';

const Button = (props) => {
	const { variant = 'primary', size = 'medium', loading, children, ...rest } = props;

	return (
		<StyledButton $variant={variant} size={size} {...rest}>
			{loading ? variant === 'text' ? 'Loading...' : <Spinner className="spinner" /> : children}
		</StyledButton>
	);
};

export default Button;
