import './App.css';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Form from './components/Form/Form.jsx';
import Menu from './layouts/Menu/Menu.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import {useLocalStorage} from './hooks/use-localstorage.hook.js';
import {useEffect, useState} from 'react';

function mapItems(data) {
	if (!data) {
		return [];
	}
	return data.map(i => ({
		...i,
		isLogged: false
	}));
}

function sendToProfile(data) {
	if (!data) {
		return [{
			name: '',
			isLogged: false
		}];
	}
	return data;
}



function App() {
	const data = [{
		title: 'Поиск',
		text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
	}
	];

	const [userData, setUserData] = useLocalStorage('users');
	const addUserData = item => {
		const nameExist = userData.map(e => e.name).find(el => el === item.login);
		if (nameExist) {
			setUserData([...userData.map(el => {
				if (el.name === nameExist) {
					return {
						...el,
						isLogged: true
					};	
				} else {
					return {
						...el,
						isLogged: false
					};
				}
			})]);
			return;
		}
		setUserData([...mapItems(userData), {
			name: item.login,
			isLogged: true
		}]);
	};

	const userLogOut = () => {
		setUserData([...mapItems(userData)]);
	};


	const toSearch = (info) => {
		console.log(info);
	};



	const favList = [
		{
			id: 5,
			reviews: 8125,
			poster: '/public/posters/money-heist-poster.jpg',
			title: 'Money Heist'
		}
	];

	return (
		<>
			<Menu>
				<Navigation/>
				<Profile
					profile={userData}
					logout={userLogOut}
				/>
			</Menu>
			<Heading text={data[0].title}/>
			<Paragraph text={data[0].text}/>
			<Form
				type={'search'}
				func={toSearch}
			/>
			<Form
				type={'login'}
				func={addUserData}
			/>
			<MovieList favList={favList}/>
		</>
	);
}

export default App;
