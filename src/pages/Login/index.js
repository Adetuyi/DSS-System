import { useState } from 'react';
import { Button, InputGroup } from '../../ui';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { Approutes } from '../../constants';

const Login = () => {
	const [formData, setFormData] = useState({ username: '', password: '' });

	const handleChange = (event, name, value) => {
		name = event.target.name || name || '';
		value = event.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Container>
			<div>
				<h1>Welcome back!</h1>
			</div>
			<div>
				<form onSubmit={(event) => event.preventDefault()}>
					<h2>Log in</h2>
					<p>Welcome back! Please enter your details.</p>

					<div>
						<InputGroup
							label="Username / Matric number"
							name="username"
							onChange={handleChange}
							placeholder="username / 20*******0"
							required
							value={formData.username}
						/>
						<InputGroup
							label="Password"
							name="password"
							type="password"
							onChange={handleChange}
							placeholder=". . . . . . . ."
							required
							value={formData.password}
						/>
						<Link to={Approutes.reset_password}>Reset Password</Link>
						<Button>Sign in</Button>
					</div>
				</form>
			</div>
		</Container>
	);
};
export default Login;
