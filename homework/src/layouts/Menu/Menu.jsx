import styles from './Menu.module.css';
import Logo from '../../components/Logo/Logo.jsx';

function Menu({children}) {

	return (
		<div className={styles.menu}>
			<Logo/>
			<div className={styles['menu__items']}>
				{children}
			</div>
		</div>
	);
}

export default Menu;