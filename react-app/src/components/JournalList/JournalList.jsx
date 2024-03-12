import './JournalList.css';
import CardButton from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';
import {useContext} from 'react';
import {UserContext} from '../../context/user.context.jsx';

function JournalList({journalData}) {
	const {userId } = useContext(UserContext);
	if (journalData.length === 0) {
		return <p>Записей нет, добавьте первую</p>;
	}

	const sortItems = (a, b) => {
		if (a > b) {
			return 1;
		} else {
			return -1;
		}
	};

	return 	<div className='journal-list'>
		{journalData
			.filter(el => el.userId === userId)
			.sort(sortItems)
			.map(e => {
				return <CardButton key={e.id}>
					<JournalItem
						title={e.title}
						text={e.text}
						date={e.date}
					/>
				</CardButton>;
			})}
	</div>

	
	;
}

export default JournalList;
