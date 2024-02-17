import style from './JournalForm.module.css';
import Button from '../Button/Button.jsx';
import {useState} from 'react';
import cn from 'classnames';
function JournalForm({addJournalData}) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if(!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, title: true}));
		}
		if(!formProps.text?.trim().length) {
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, text: true}));
		}
		if(!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isFormValid = false;
		} else {
			setFormValidState(state => ({...state, date: true}));
		}
		if(!isFormValid) {
			return;
		}
		addJournalData(formProps);
	};
	return (
		<>
			<form className={style['journal-form']} onSubmit={addJournalItem}>
				<div>
					<input type="text" name="title" className={cn(style['input-title'], {
						[style['invalid']]: !formValidState.title
					})}/>
				</div>
				<div>
					<div className={style['journal-form__info']}>
						<label htmlFor="date" className={style['journal-form__labels']}>
							<img src="/public/date-icon.svg" alt="Иконка даты"/>
							Дата
						</label>
						<input type="date" name="date" id="date" className={cn(style['input'], {
							[style['invalid']]: !formValidState.date
						})}/>
					</div>
					<div className={style['journal-form__info']}>
						<label htmlFor="tag" className={style['journal-form__labels']}>
							<img src="/public/tags-icon.svg" alt="Иконка даты"/>
							Метки
						</label>
						<input type="text" name="tag" id="tag" className={style['input']}/>
					</div>
				</div>

				<textarea name="text" id="" cols="30" rows="10" className={cn(style['input'], {
					[style['invalid']]: !formValidState.text
				})}></textarea>
				<Button text='Сохранить' onClick={() => {
					console.log('Нажали');
				}}/>
			</form>

		</>
	);
}

export default JournalForm;
