import { Approutes } from './routes';
import { Dashboard, DashboardActive, Setting, SettingActive, Students, Trainers } from '../assets/svgs';

export const navList = [
	{
		name: 'Dashboard',
		link: Approutes.dashboard.index,
		svg: {
			default: <Dashboard />,
			active: <DashboardActive />,
		},
	},
	{
		name: 'Students',
		link: Approutes.students.initial,
		svg: {
			default: <Students />,
		},
		menu: [
			{ name: 'Active', link: Approutes.students.management },
			{ name: 'Potential', link: Approutes.students.management },
		],
	},
	{
		name: 'Trainers',
		link: Approutes.students.initial,
		svg: {
			default: <Trainers />,
		},
		menu: [
			{ name: 'Instructor', link: Approutes.students.initial },
			{ name: 'Mentor', link: Approutes.students.initial },
		],
	},
	{
		name: 'Settings',
		link: Approutes.settings.initial,
		svg: {
			default: <Setting />,
			active: <SettingActive />,
		},
	},
];
