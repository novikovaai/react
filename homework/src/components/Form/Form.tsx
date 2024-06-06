import Input from '../Input/Input';
import Button from '../Button/Button.tsx';
import {formType, INITIAL_STATE, formReducer, FormState} from './Form.state';
import {useRef, useReducer, useEffect, useContext} from 'react';
import {UserContext} from '../../context/user.context.tsx';
import {FormProps} from './Form.props';
import styles from './Form.module.css';

function Form({type, func} : FormProps) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, value, isFormReadyToSubmit }: FormState = formState;
	const inputRef = useRef<HTMLInputElement>(null);
	const { addUserData } = useContext(UserContext);
	const focusError = (isValid: boolean) => {
		if(!isValid) {
			inputRef.current?.focus();
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
				if (addUserData) {
					addUserData(value);
				}
				dispatchForm({type: 'CLEAR'});
			} else {
				if(func) {
					func(value);
				}

			}
		}
	}, [isFormReadyToSubmit, value, func, type]);


	const onChange  = (e: React.FormEvent<HTMLInputElement>) => {
		console.log(e.target);
		const targ = e.target as HTMLInputElement;
		dispatchForm({type: 'SET_VALUE', payload: {value: targ.value}});
	};

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(e.target) {
			const form  = e.target as HTMLFormElement;
			const formDate = new FormData(form);
			const formProps = Object.fromEntries(formDate);
			const toSend = formProps[Object.keys(formProps)[0]] as string
			dispatchForm({type: 'SUBMIT', payload: toSend});
		}

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