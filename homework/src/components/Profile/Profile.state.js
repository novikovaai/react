export function toLogin (data) {
	if (!data) {
		return {
			name: '',
			isLogged: false
		};
	}
	const loggedUser = [...data].find(e => e.isLogged === true);
	if (!loggedUser) {
		return {
			name: '',
			isLogged: false
		};
	}
	return loggedUser;
}
