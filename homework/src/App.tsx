import './App.css';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';
import Form from './components/Form/Form';
import Menu from './layouts/Menu/Menu';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import MovieList from './components/MovieList/MovieList';
import {UserContextProvider} from './context/user.context';



function App() {
	const data = {
		mainPage: {
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	};

	const toSearch = (info: string) => {
		console.log(info);
	};

	return (
		<UserContextProvider>
			<>
				<Menu>
					<Navigation/>
					<Profile/>
				</Menu>
				<Heading>{data.mainPage.title}</Heading>
				<Paragraph>{data.mainPage.text}</Paragraph>
				<Form
					type={'search'}
					func={toSearch}
				/>
				<Form
					type={'login'}
				/>
				<MovieList/>
			</>
		</UserContextProvider>
	);
}

export default App;
