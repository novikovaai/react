import Logo from '../../components/Logo/Logo';
import {MenuProps} from './Menu.props';
import styles from './Menu.module.css';

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