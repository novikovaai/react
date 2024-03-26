import './JournalList.css';
import CardButton from '../CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';
import {useContext, useMemo} from 'react';
import {UserContext} from '../../context/user.context.jsx';

function JournalList({journalData, setItem}) {
	const {userId } = useContext(UserContext);
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};
	const filteredItems = useMemo(() => journalData
		.filter(el => el.userId === userId)
		.sort(sortItems), [journalData, userId]);

	if (journalData.length === 0) {
		return <p>Записей нет, добавьте первую</p>;
	}





	return 	<div className='journal-list'>
		{filteredItems.map(e => {
			return <CardButton onClick={() => setItem(e)} key={e.id}>
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
