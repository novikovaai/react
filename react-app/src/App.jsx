import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import {useState} from 'react';
import JournalForm from './components/JournalForm/JournalForm.jsx';

function App() {
	const data = [
		// {
		// 	id: 1,
		// 	title: 'Подготовка к обновлению курсов',
		// 	text: 'Сегодня провёл весь день за',
		// 	date: new Date()
		// },
		// {
		// 	id: 2,
		// 	title: 'Поход в годы',
		// 	text: 'Горные походы открывают удивительные природные ландшафты',
		// 	date: new Date()
		// }
	];
	const [journalData, setJournalData] = useState(data);
	const addJournalData = (e) => {
		setJournalData(oldData => [...oldData, {
			id: oldData.length > 0 ? Math.max(...oldData.map(i => i.id)) + 1 : 1,
			title: e.title,
			text: e.text,
			date: new Date(e.date)
		}]);
	};


	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList
					journalData={journalData}
				/>
			</LeftPanel>
			<Body>
				<JournalForm
					addJournalData={addJournalData}
				/>

			</Body>


		</div>
	);
}

export default App;
