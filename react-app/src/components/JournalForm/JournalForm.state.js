export const INITIAL_STATE = {
	isValid: {
		title: true,
		text: true,
		date: true
	},
	values: {
		title: '',
		text: '',
		date: '',
		tag: ''
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch (action.type) {
	case 'SET_VALUES':
		return {...state, values: {...state.value, ...action.payload}};
	case 'CLEAR':
		return {...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return {...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const titleValidity = action.payload.title?.trim().length;
		const textValidity = action.payload.text?.trim().length;
		const dateValidity = action.payload.date;
		return {
			values: action.payload,
			isValid:{
				title: titleValidity,
				text: textValidity,
				date: dateValidity
			},
			isFormReadyToSubmit: titleValidity && textValidity && dateValidity
		};
	}
	}
}