import './App.css';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Form from './components/Form/Form.jsx';
import Menu from './layouts/Menu/Menu.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import MovieList from './components/MovieList/MovieList.jsx';
import {UserContextProvider} from './context/user.context.jsx';



function App() {
	const data = {
		mainPage: {
			title: 'Поиск',
			text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
		}
	};

	const toSearch = (info) => {
		console.log(info);
	};

	return (
		<UserContextProvider>
			<>
				<Menu>
					<Navigation/>
					<Profile/>
				</Menu>
				<Heading text={data.mainPage.title}/>
				<Paragraph text={data.mainPage.text}/>
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
