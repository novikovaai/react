import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Body from './layouts/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import {useLocalStorage} from './hooks/use-localstorage.hook.js';
import {UserContextProvider} from './context/user.context.jsx';
import {useState} from 'react';

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
	const [selectedItem, setSelectedItem] = useState(null);
	const addJournalData = item => {
		if(!item.id) {
			setJournalData([...mapItems(journalData), {
				...item,
				id: journalData.length > 0 ? Math.max(...journalData.map(i => i.id)) + 1 : 1,
				date: new Date(item.date)
			}]);
		} else {
			setJournalData([...mapItems(journalData).map(i => {
				if(i.id === item.id){
					return {
						...item
					};
				} 
				return i;
			}) ]);
		}

	};
	const deleteItem = (id) => {
		setJournalData([...journalData.filter(item => item.id !== id)]);
	};


	return (
		<UserContextProvider>
			<div className='app'>
				<LeftPanel>
					<Header/>
					<JournalAddButton clearForm={() => setSelectedItem(null)}/>
					<JournalList
						journalData={mapItems(journalData)}
						setItem={setSelectedItem}
					/>
				</LeftPanel>
				<Body>
					<JournalForm
						addJournalData={addJournalData}
						data={selectedItem}
						deleteItem={deleteItem}
					/>
				</Body>
			</div>
		</UserContextProvider>

	);
}

export default App;
