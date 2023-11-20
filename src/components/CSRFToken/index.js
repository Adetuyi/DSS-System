import { useEffect } from 'react';
import { axios } from '../../library';
import { Appurls } from '../../constants';
import { useState } from 'react';

const CSRFToken = () => {
	const [csrftoken, setCsrftoken] = useState('');

	const getCookie = (name) => {
		let cookieValue = null;
		if (document.cookie && document.cookie !== '') {
			const cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				if (cookie.substring(0, name.length + 1) === name + '=') {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};
	useEffect(() => {
		const getToken = async () => {
			await axios.get(Appurls.auth.get_csrf_token);
		};

		getToken();
		setCsrftoken(getCookie('csrftoken'));
	}, []);

	return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};
export default CSRFToken;
