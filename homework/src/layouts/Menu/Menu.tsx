import styles from './Menu.module.css';
import Logo from '../../components/Logo/Logo';
import {MenuProps} from './Menu.props';

function Menu({children}: MenuProps) {

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