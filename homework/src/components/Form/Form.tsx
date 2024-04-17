import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button.tsx';
import {formType, INITIAL_STATE, formReducer, FormState} from './Form.state';
import {useRef, useReducer, useEffect, useContext} from 'react';
import {UserContext} from '../../context/user.context.tsx';
import {FormProps} from './Form.props';


function Form({type, func} : FormProps) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, value, isFormReadyToSubmit }: FormState = formState;
	const inputRef = useRef();
	const { addUserData } = useContext(UserContext);
	// const [userData] = useLocalStorage('users');
	const focusError = (isValid: boolean) => {
		if(!isValid) {
			inputRef.current.focus();
		}
	};
	useEffect(() => {
		let timerID: number;
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

	useEffect(() => {
		if (isFormReadyToSubmit) {
			if (type === 'login') {
				addUserData(value);
				dispatchForm({type: 'CLEAR'});
			} else {
				func(value);
			}
		}
	}, [isFormReadyToSubmit, value, func, type]);


	const onChange = (e) => {
		dispatchForm({type: 'SET_VALUE', payload: {value: e.target.value}});
	};

	const submitForm = (e) => {
		e.preventDefault();
		const formDate = new FormData(e.target);
		const formProps = Object.fromEntries(formDate);
		dispatchForm({type: 'SUBMIT', payload: formProps});
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
					isValid={isValid}
				/>
				<Button>
					{formType[type].text}
				</Button>
			</form>
		</>
	);
}

export default Form;