import './Menu.css';
import Logo from '../../components/Logo/Logo.jsx';

function Menu({children}) {

	return (
		<div className='menu'>
			<Logo/>
			<div className='menu__items'>
				{children}
			</div>
		</div>
	);
}

export default Menu;