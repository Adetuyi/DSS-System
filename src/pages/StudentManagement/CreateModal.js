import { Button, InputGroup, Modal } from '../../ui';

const CreateModal = ({ closeModal, handleSubmit, formData, handleChange, isLoading }) => {
	return (
		<Modal closeModal={closeModal} heading={'Create Student'}>
			<form onSubmit={handleSubmit}>
				<InputGroup name="first_name" label="First Name" value={formData.first_name} onChange={handleChange} placeholder="e.g John" required />

				<InputGroup label="Last Name" name="last_name" placeholder="e.g Doe" value={formData.last_name} onChange={handleChange} required />

				<div className="input--con">
					<InputGroup
						type="date"
						label="Date of Birth"
						name="date_of_birth"
						value={formData.date_of_birth}
						onChange={handleChange}
						placeholder="e.g 1/1/2023"
						required
					/>
					<InputGroup
						type="number"
						label="Matric Number"
						name="matric_number"
						value={formData.matric_number}
						onChange={handleChange}
						placeholder="e.g 190591000"
						required
					/>
				</div>

				<div className="button--group">
					<Button disabled={isLoading} onClick={closeModal} type="button" variant="text">
						Cancel
					</Button>
					<Button loading={isLoading} variant="secondary">
						Save
					</Button>
				</div>
			</form>
		</Modal>
	);
};
export default CreateModal;
