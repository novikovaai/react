import './Header.css';
import SelectUser from '../SelectUser/SelectUser.jsx';
import Button from '../Button/Button.jsx';
import {useState} from 'react';

const logos = ['/journal-logo.svg', '/vite.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<img className='logo' src={logos[logoIndex]} alt=""/>
			<SelectUser/>
			<Button onClick={toggleLogo}>Сменить лого</Button>
		</>
	);
}

export default Header;