import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton.jsx';
function JournalAddButton({clearForm}) {
	return (
		<>
			<CardButton className='journal-add-button' onClick={clearForm}>
				<img src="/plus.svg" alt=""/>
				Новое воспоминание
			</CardButton>
		</>
	);
}

export default JournalAddButton;
