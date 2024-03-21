import './App.css';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Form from './components/Form/Form.jsx';
import Menu from './layouts/Menu/Menu.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import {useLocalStorage} from './hooks/use-localstorage.hook.js';
import {useContext} from 'react';
import {UserContext} from './context/user.context.jsx';
import {UserContextProvider} from './context/user.context.jsx';
import Input from './components/Input/Input.jsx';

function mapItems(data) {
	if (!data) {
		return [];
	}
	return data.map(i => ({
		...i,
		isLogged: false
	}));
}


function App() {
	const data = {
		mainPage: {
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	};
	const [userData, setUserData] = useLocalStorage('users');
	const addUserData = item => {
		const userExists = userData.find(el => el.name === item);
		if (userExists) {
			setUserData([...userData.map(el => {
				if (el.name === userExists.name) {
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
			name: item,
			isLogged: true,
			favList: []
		}]);
	};

	const userLogOut = () => {
		setUserData(mapItems(userData));
	};


	const toSearch = (info) => {
		console.log(info);
	};



	const favList = [
		{	id: 5,
			reviews: 8125,
			poster: '/public/posters/money-heist-poster.jpg',
			title: 'Money Heist'
		}
	];

	return (
		<UserContextProvider>
			<>
				<Menu>
					<Navigation/>
					<Profile
						func={userLogOut}
					/>
				</Menu>
				<Heading text={data.mainPage.title}/>
				<Paragraph text={data.mainPage.text}/>
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
		</UserContextProvider>
	);
}

export default App;
