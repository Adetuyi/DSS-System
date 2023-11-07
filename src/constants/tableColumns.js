import { Tag } from '../ui';

export const studentTableColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		fixed: true,
		// render: (text) => <a>{text}</a>,
	},
	{
		title: 'Program',
		dataIndex: 'program',
		key: 'program',
	},
	{
		title: 'Date Joined',
		dataIndex: 'date_joined',
		key: 'date',
	},
	{
		title: 'Price',
		key: 'price',
		dataIndex: 'price',
	},
	{
		title: 'Plan',
		key: 'plan',
		dataIndex: 'plan',
		render: (tag) => {
			let color;
			if (tag === 'Full') {
				color = '#161331';
			} else {
				color = '#B44A23';
			}
			return (
				<Tag color={color} key={tag}>
					<div className="tag">{tag}</div>
				</Tag>
			);
		},
	},
];
