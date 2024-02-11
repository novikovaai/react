import './App.css';
import Heading from './components/Heading/Heading.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';
import Button from './components/Button/Button.jsx';
import Input from './components/Input/Input.jsx';
import Search from './components/Search/Search.jsx';

function App() {
	const data = [{
		title: 'Поиск',
		text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
		textOnButton: 'Искать'
	}
	];

	return (
		<>
			<Heading
				text={data[0].title}
			/>
			<Paragraph
				text={data[0].text}
			/>
			<Search/>

			<Input
				placeholder={'Ваше имя'}
				img={''}
			/>


		</>
	);
}

export default App;
