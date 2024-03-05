import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import {useEffect, useState} from 'react';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import {useLocalStorage} from './hooks/use-localstorage.hook.js';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const [journalData, setJournalData] = useLocalStorage('data');
	console.log(journalData);
	const addJournalData = item => {
		setJournalData([...mapItems(journalData), {
			id: journalData.length > 0 ? Math.max(...journalData.map(i => i.id)) + 1 : 1,
			title: item.title,
			text: item.text,
			date: new Date(item.date)
		}]);
	};


	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList
					journalData={mapItems(journalData)}
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
