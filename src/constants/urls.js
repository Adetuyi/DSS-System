export const Appurls = {
	auth: {
		get_csrf_token: '/get-csrf-token/',
		login: '/login/',
		logout: '/logout/',
		is_logged_in: '/is-logged-in/',
		change_password: '/change-password/',
	},
	attendance: {
		get_all: '/attendance-list/',
		create: '/attendance-create/',
		update: (id) => `/attendance-update/${id}/`,
		delete: (id) => `/attendance-delete/${id}/`,
	},
	course: {
		get_all: '/course-list/',
		create: '/course-create/',
		update: (id) => `/course-update/${id}/`,
		delete: (id) => `/course-delete/${id}/`,
	},
	student: {
		get_all: '/student-list/',
		create: '/student-create/',
		update: (id) => `/student-update/${id}/`,
		delete: (id) => `/student-delete/${id}/`,
	},
	update_profile: '/update-profile/',
};
