import { useState } from 'react';
import { StyledInputGroup } from './styles';
import { EyeOpen, EyeSlashed } from '../../assets/svgs';

const InputGroup = ({ label, value = '', onChange, placeholder, variant = 'input', type = 'text', name, required = false, ...rest }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<StyledInputGroup>
			{variant === 'input' ? (
				<input
					type={type === 'password' ? (passwordVisible ? 'text' : 'password') : type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					required={required}
					{...rest}
				/>
			) : variant === 'textarea' ? (
				<textarea rows={3} placeholder={placeholder} name={name} value={value} onChange={onChange} {...rest} />
			) : null}

			{label ? (
				<label htmlFor={name}>
					{label} {!required ? <span>(Optional)</span> : null}
				</label>
			) : null}

			{type === 'password' ? (
				<div className="action-con" tabIndex={0} onClick={() => setPasswordVisible((prev) => !prev)}>
					<EyeOpen className={passwordVisible ? 'active' : ''} />
					<EyeSlashed className={passwordVisible ? '' : 'active'} />
				</div>
			) : null}
		</StyledInputGroup>
	);
};

export default InputGroup;
