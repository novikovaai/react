import styles from './Navigation.module.css';
import cn from 'classnames';

function Navigation() {

	return (
		<nav className={styles.navigation}>
			<a href="#" className={cn(
				styles['navigation__item'],
				styles['navigation__search'],
				styles['navigation__active'])
			}>Поиск фильмов</a>
			<div className={cn(
				styles['navigation__item'],
				styles['navigation__favorites']
			)}>
				<a href="#" className={styles['navigation__my']}>Мои фильмы</a>
				<div className={styles['navigation__count']}>0</div>
			</div>
		</nav>
	);
}

export default Navigation;