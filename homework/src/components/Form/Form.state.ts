export interface FormType {
	search: {
		placeholder: string
		img: string
		text: string
		formClass: string}
	login: {
		placeholder: string
		img: string
		text: string
		formClass: string}
}

export interface FormState {
	value: string,
	isValid: boolean,
	isFormReadyToSubmit: boolean
}



export const formType: FormType = {
	search: {
		placeholder: 'Введите название',
		img: '/public/search-icon.svg',
		text: 'Искать',
		formClass: 'form-search'
	},
	login: {
		placeholder: 'Ваше имя',
		img: '',
		text: 'Войти в профиль',
		formClass: 'form-login'
	}
};

export const INITIAL_STATE: FormState  = {
	value: '',
	isValid: true,
	isFormReadyToSubmit: false
};

export type LoginAction =
	| {type: 'RESET_VALIDITY' | 'CLEAR'}
	| {type: 'SET_VALUE', payload: { value: string }}
	| {type:  'SUBMIT', payload:  string}

export function formReducer(state: FormState, action: LoginAction) {
	switch (action.type) {
	case 'SET_VALUE':
		return {...state, ...action.payload};
	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const validity = action.payload?.trim().length > 0;
		return {
			value: action.payload,
			isValid: validity,
			isFormReadyToSubmit: validity
		};
	}
	case 'CLEAR':
		return {...state, value: INITIAL_STATE.value, isFormReadyToSubmit: false};
	}
}