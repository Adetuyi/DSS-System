import { Search, Info } from '../../assets/svgs';
import { Container } from './styles';

const InputGroup = (props) => {
	const {
		type = 'text',
		size = 'large',
		required,
		disabled,
		warnMsg,
		successMsg,
		errorMsg,
		onBlur,
		onChange,
		...rest
	} = props;

	return (
		<Container size={size} className="success">
			<div className="input--group">
				<input
					type={type}
					placeholder="Placeholder"
					required={required}
					disabled={disabled}
					data-warnmsg={warnMsg}
					data-errormsg={errorMsg}
					data-successmsg={successMsg}
					onBlur={(e) => {
						if (typeof onChange === 'function') onBlur(e);
					}}
					onChange={(e) => {
						if (typeof onChange === 'function') onChange(e);
					}}
					{...rest}
				/>
				<Search />

				<label htmlFor="">
					Label <span>(Optional)</span>
				</label>
			</div>

			<div className="info--con">
				<Info /> Normal description
			</div>
			<div className="info--con error--con hidden">
				<Info /> Warning message
			</div>
		</Container>
	);
};

export default InputGroup;
