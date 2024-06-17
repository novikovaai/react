import cn from 'classnames';
import {NavLink} from 'react-router-dom';
import styles from './Profile.module.css';
import {useUser} from "../../hooks/useUser.ts";
import {useCallback} from "react";

function Profile() {
	const {userInfo, userLogout} = useUser();

	const logout = useCallback(() => {
		userLogout();
	}, [userLogout]) ;

	return (
		<div className={styles.profile}>
			<div className={cn(
				styles['profile__item'],
				styles['profile__login'], {
					[styles['profile__inactive']]: userInfo.isLogged
				}
			)}>
				<NavLink to='/login' className={({isActive}) => cn({
					[styles['navigation__active']]: isActive
				})}>Войти</NavLink>
				<img src="/public/login-icon.svg" alt=""/>
			</div>
			<div className={cn(
				styles['profile__item'],
				styles['profile__name'], {
					[styles['profile__inactive']]: !userInfo.isLogged
				}
			)}>
				<a href="#">{userInfo.name}</a>
				<img src="/public/user-icon.svg" alt=""/>
			</div>
			<button onClick={logout} className={cn(
				styles['profile__item'],
				styles['profile__logout'], {
					[styles['profile__inactive']]: !userInfo.isLogged
				}
			)}>
				Выйти
			</button>
		</div>
	);
}

export default Profile;