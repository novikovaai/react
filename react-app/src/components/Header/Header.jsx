import './Header.css';
import SelectUser from '../SelectUser/SelectUser.jsx';
import Button from '../Button/Button.jsx';
import { useState} from 'react';
import Logo from '../Logo/Logo.jsx';

const logo = '/journal-logo.svg';

function Header() {


	return (
		<>
			<Logo image={logo}/>
			<SelectUser/>
		</>
	);
}

export default Header;