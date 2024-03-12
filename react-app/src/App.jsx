import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import {useLocalStorage} from './hooks/use-localstorage.hook.js';
import {UserContextProvider} from './context/user.context.jsx';

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

	const addJournalData = item => {
		setJournalData([...mapItems(journalData), {
			...item,
			id: journalData.length > 0 ? Math.max(...journalData.map(i => i.id)) + 1 : 1,
			date: new Date(item.date)
		}]);
	};



	return (
		<UserContextProvider>
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
		</UserContextProvider>

	);
}

export default App;
