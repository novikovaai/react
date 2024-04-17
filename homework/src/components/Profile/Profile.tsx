import styles from './Profile.module.css';
import cn from 'classnames';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../context/user.context.tsx';


function Profile() {
	const {userInfo, userLogout} = useContext(UserContext);

	const logout = () => {
		userLogout()
	};


	return (
		<div className={styles.profile}>
			<div className={cn(
				styles['profile__item'],
				styles['profile__login'], {
					[styles['profile__inactive']]: userInfo.isLogged
				}
			)}>
				<a href="#">Войти</a>
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