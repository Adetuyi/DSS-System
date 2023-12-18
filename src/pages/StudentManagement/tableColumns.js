import { Space } from 'antd';
import { Delete, Edit, EyeOpen } from '../../assets/svgs';
import { getDateTime } from '../../utilities';

export const columns = ({ handleDelete, handleEdit, handleView }) => [
	{
		title: 'First Name',
		dataIndex: 'first_name',
		key: 'first_name',
		fixed: true,
	},
	{
		title: 'Last Name',
		dataIndex: 'last_name',
		key: 'last_name',
	},
	{
		title: 'Date of Birth',
		dataIndex: 'date_of_birth',
		key: 'date_of_birth',
		render: (record) => getDateTime(record, 'mm dd yyyy'),
	},
	{
		title: 'Matric Number',
		dataIndex: 'matric_number',
		key: 'matric_number',
	},
	{
		title: 'Action',
		key: 'action',
		render: (record) => (
			<Space size="middle">
				<span style={{ cursor: 'pointer' }}>
					<EyeOpen style={{ width: '16px', height: 'auto' }} onClick={() => handleView(record)} />
				</span>
				<span style={{ cursor: 'pointer' }}>
					<Edit onClick={() => handleEdit(record)} />
				</span>
				<span style={{ cursor: 'pointer' }}>
					<Delete onClick={() => handleDelete(record)} />
				</span>
			</Space>
		),
	},
];
