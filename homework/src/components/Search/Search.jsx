import './Search.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function Search() {

	return (
		<>
			<form action="" className='search'>
				<Input
					placeholder={'Введите название'}
					img={'search-icon'}
				/>
				<Button
					text={'Искать'}
				/>
			</form>
		</>
	);
}

export default Search;