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
	const formType = {
		search: {
			placeholder: 'Введите название',
			img: '/public/search-icon.svg',
			text: 'Искать',
			formClass: 'form-search'
		},
		login: {
			placeholder: 'Ваше имя',
			img: '',
			text: 'Войти в профиль',
			formClass: 'form-login'
		}
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
				<Profile/>
			</Menu>
			<Heading text={data[0].title}/>
			<Paragraph text={data[0].text}/>
			<Form
				type={formType.search}
				placeholder={formType.search.placeholder}
				img={formType.search.img}
				text={formType.search.text}
				formClass={formType.search.formClass}
			/>
			<MovieList favList={favList}/>
		</>
	);
}

export default App;
