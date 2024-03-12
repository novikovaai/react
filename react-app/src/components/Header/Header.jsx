import './Header.css';
import SelectUser from '../SelectUser/SelectUser.jsx';

function Header() {

	return (
		<>
			<img className='logo' src="/journal-logo.svg" alt=""/>
			<SelectUser/>
		</>
	);
}

export default Header;