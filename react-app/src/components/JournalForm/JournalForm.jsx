import style from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useEffect, useReducer, useRef, useState} from 'react';
import cn from 'classnames';
import {INITIAL_STATE, formReducer} from './JournalForm.state.js';
import Input from '../Input/Input.jsx';


function JournalForm({addJournalData}) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const textRef = useRef()

	const focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;
		}
	};
	useEffect(() => {
		let timerID;
		if (!isValid.date || !isValid.text || !isValid.title ) {
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
			addJournalData(values);
			dispatchForm({type: 'CLEAR'});
		}
	}, [isFormReadyToSubmit, values, addJournalData]);

	const onChange = (e) => {
		dispatchForm({type: 'SET_VALUES', payload: { [e.target.name]: e.target.value}});
	}
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		// console.log()
		dispatchForm({type: 'SUBMIT', payload: formProps});

	};
	return (
		<>
			<form className={style['journal-form']} onSubmit={addJournalItem}>
				<div>
					<Input type="text" ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name="title" appearance='title'/>
				</div>
				<div>
					<div className={style['journal-form__info']}>
						<label htmlFor="date" className={style['journal-form__labels']}>
							<img src="/public/date-icon.svg" alt="Иконка даты"/>
							Дата
						</label>
						<Input type="date" isValid={isValid.date} ref={dateRef} onChange={onChange} value={values.date} name="date" id="date"/>
					</div>
					<div className={style['journal-form__info']}>
						<label htmlFor="tag" className={style['journal-form__labels']}>
							<img src="/public/tags-icon.svg" alt="Иконка даты"/>
							Метки
						</label>
						<Input type="text" ref={textRef} isValid={isValid.date} onChange={onChange} value={values.tag} name="tag" id="tag" />
					</div>
				</div>

				<textarea name="text" onChange={onChange} value={values.text} id="" cols="30" rows="10" className={cn(style['input'], {
					[style['invalid']]: !isValid.text
				})}></textarea>
				<Button text='Сохранить' onClick={() => {
					console.log('Нажали');
				}}/>
			</form>

		</>
	);
}

export default JournalForm;
