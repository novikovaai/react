import cn from 'classnames';
import {useContext} from 'react';
import {UserContext} from '../../context/user.context.tsx';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
	const {userInfo} = useContext(UserContext);

	return (
		<>
			<nav className={styles.navigation}>
				<NavLink to='/' className={({isActive}) => cn(
					styles['navigation__item'],
					styles['navigation__search'], {
					[styles['navigation__active']]: isActive
				})
				}>Поиск фильмов</NavLink>
				<div className={cn(
					styles['navigation__item'],
					styles['navigation__favorites']
				)}>
					<NavLink to='/favorites' className={({isActive}) => cn(styles['navigation__my'], {
						[styles['navigation__active']]: isActive
					})}>Мои фильмы</NavLink>
					<div className={styles['navigation__count']}>{userInfo.favList.length}</div>
				</div>
			</nav>
		</>
	);
}

export default Navigation;