import { useState } from 'react';
import { Button, InputGroup } from '../../../ui';
import { Container } from './styles';

const Profile = () => {
	const [formData, setFormData] = useState({ email: '' });

	const handleChange = (event, name, value) => {
		name = event.target.name || name || '';
		value = event.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Container>
			<div>
				<h3>My Profile</h3>
				<p>You can edit your name, photo and change your password.</p>
			</div>

			<div className="profile-details">
				<div>
					<h4>Account info</h4>
					<form>
						<InputGroup label="First Name" placeholder="Jane" onChange={handleChange} required />
						<InputGroup label="Last Name" placeholder="Doe" onChange={handleChange} required />

						<Button>Update Account Info</Button>
					</form>
				</div>

				<div>
					<h4>Password</h4>
					<form>
						<InputGroup label="Old Password" placeholder="Enter your old password" onChange={handleChange} required />
						<InputGroup label="New Password" placeholder="Enter your new password" onChange={handleChange} required />
						<InputGroup label="Confirm New Password" placeholder="Enter your new password again" onChange={handleChange} required />

						<Button>Update Password</Button>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default Profile;
