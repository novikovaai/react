import styles from './Profile.module.css';
import cn from 'classnames';
import {toLogin} from './Profile.state.js';


function Profile({profile, logout}) {
	const user = toLogin(profile);

	return (
		<div className={styles.profile}>
			<div className={cn(
				styles['profile__item'],
				styles['profile__login'], {
					[styles['profile__inactive']]: user.isLogged
				}
			)}>
				<a href="#">Войти</a>
				<img src="/public/login-icon.svg" alt=""/>
			</div>
			<div className={cn(
				styles['profile__item'],
				styles['profile__name'], {
					[styles['profile__inactive']]: !user.isLogged
				}
			)}>
				<a href="#">{user.name}</a>
				<img src="/public/user-icon.svg" alt=""/>
			</div>
			<button onClick={logout} className={cn(
				styles['profile__item'],
				styles['profile__logout'], {
					[styles['profile__inactive']]: !user.isLogged
				}
			)}>
				Выйти
			</button>
		</div>
	);
}

export default Profile;