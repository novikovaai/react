export const formType = {
	'search': {
		placeholder: 'Введите название',
		img: '/public/search-icon.svg',
		text: 'Искать',
		formClass: 'form-search'
	},
	'login': {
		placeholder: 'Ваше имя',
		img: '',
		text: 'Войти в профиль',
		formClass: 'form-login'
	}
};

export const INITIAL_STATE = {
	value: '',
	isValid: true,
}

export function formReducer(state, action) {
	console.log({...action.payload})
	switch (action.type) {
	case 'SET_VALUE':
		return {...state, value: {...action.payload}};
	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const validity = action.payload?.value.trim().length;
		return {
			value: action.payload.value,
			isValid: validity
		};
	}
	}
}