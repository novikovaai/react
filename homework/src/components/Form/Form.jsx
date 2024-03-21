import styles from './Form.module.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import {formType, INITIAL_STATE, formReducer} from './Form.state.js';
import {useRef, useReducer, useEffect, useContext} from 'react';
import {UserContext} from '../../context/user.context.jsx';


function Form({type, func}) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, value, isFormReadyToSubmit } = formState;
	const inputRef = useRef();
	const { setUserInfo } = useContext(UserContext);
	// const [userData] = useLocalStorage('users');
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

	useEffect(() => {
		if (isFormReadyToSubmit) {
			func(value);
			if (type !== 'search' ) {
				setUserInfo({
					name: value,
					isLogged: true,
					favList: []
				});
				// const infoExists = userData.find(el => el.name === value);
				// if(infoExists) {
				// 	setUserInfo(...userData.filter(el => el.name === value));
				// } else {
				// 	setUserInfo({
				// 		name: value,
				// 		isLogged: true
				// 	});
				// }
				dispatchForm({type: 'CLEAR'});
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
				<Button
					text={formType[type].text}
				/>
			</form>
		</>
	);
}

export default Form;