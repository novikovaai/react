import styles from './Form.module.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import {formType, INITIAL_STATE, formReducer} from './Form.state.js';
import {useRef, useReducer, useEffect} from 'react';

function Form({type, func}) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, value } = formState;
	const inputRef = useRef();
	const focusError = (isValid) => {
		if(!isValid) {
			inputRef.current.focus();
		}
	};
	useEffect(() => {
		let timerID;
		if (!isValid) {
			focusError(isValid);
			timerID = setTimeout( () => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerID);
		};
	}, [isValid]);

	const onChange = (e) => {
		dispatchForm({type: 'SET_VALUE', payload: {value: e.target.value}});
	};

	const submitForm = (e) => {
		e.preventDefault();
		const formDate = new FormData(e.target);
		const formProps = Object.fromEntries(formDate);
		console.log(formProps)
		func(dispatchForm({type: 'SUBMIT', payload: formProps}));

	};
	return (
		<>

			<form action="" className={styles[formType[type].formClass]} onSubmit={submitForm}>
				<Input
					placeholder={formType[type].placeholder}
					img={formType[type].img}
					type={type}
					ref={inputRef}
					onChange={onChange}
					value={value}
				/>
				<Button
					text={formType[type].text}
				/>
			</form>
		</>
	);
}

export default Form;