import './App.css';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Form from './components/Form/Form.jsx';
import Menu from './layouts/Menu/Menu.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import MovieList from './components/MovieList/MovieList.jsx';

function App() {
	const data = [{
		title: 'Поиск',
		text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
	}
	];



	return (
		<>
			<Menu>
				<Navigation/>
				<Profile/>
			</Menu>
			<Heading text={data[0].title}/>
			<Paragraph text={data[0].text}/>
			<Form type={'search'}/>
			<MovieList/>
			{/*<Form type={'login'}/>*/}
		</>
	);
}

export default App;
