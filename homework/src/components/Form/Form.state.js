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
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch (action.type) {
	case 'SET_VALUE':
		return {...state, ...action.payload};
	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const type = Object.keys(action.payload)[0];
		const validity = action.payload?.[type].trim().length > 0;
		return {
			value: action.payload[type],
			isValid: validity,
			isFormReadyToSubmit: validity
		};
	}
	case 'CLEAR':
		return {...state, value: INITIAL_STATE.value, isFormReadyToSubmit: false};
	}
}