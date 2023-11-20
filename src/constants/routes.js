export const Approutes = {
	auth: {
		login: '/login',
		logout: '/logout',
		reset_password: '/reset-password',
	},
	dashboard: {
		index: '/dashboard',
		lecturer: '/dashboard/lecturer',
		student: '/dashboard/student',
	},
	events: '/events',
	settings: { initial: '/settings', profile: '/settings/profile', department: '/settings/department', users: '/settings/users' },
	students: {
		initial: '/student',
		management: '/student/management',
	},
	home: '/',
	playground: '/playground',
};
