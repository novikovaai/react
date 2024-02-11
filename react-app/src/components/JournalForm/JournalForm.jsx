import './JournalForm.css';
import {useState} from 'react';
import Button from '../Button/Button.jsx';
function JournalForm() {
	const [inputData, setInputData] = useState('');
	const inputChange = (e) => {
		setInputData(e.target.value);
	};
	const addJournalItem = (e) => {
		e.preventDefault();
		const formDate = new FormData(e.target);
		const formProps = Object.fromEntries(formDate);
		console.log(formProps);
	};
	return (
		<>
			<form className='journal-form' onSubmit={addJournalItem}>
				<input type="text" name="header"/>
				<input type="date" name='date'/>
				<input type="text" name='tag' value={inputData} onChange={inputChange}/>
				<textarea name="entry" id="" cols="30" rows="10"></textarea>
				<Button text='Сохранить' onClick={() => {console.log('Нажали')}}/>
			</form>

		</>
	);
}

export default JournalForm;
