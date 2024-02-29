import styles from './Profile.module.css';
import cn from 'classnames';

function Profile() {

	return (
		<div className={styles.profile}>
			<div className={cn(
				styles['profile__item'],
				styles['profile__login']
			)}>
				<a href="#">Войти</a>
				<img src="/public/login-icon.svg" alt=""/>
			</div>
			<div className={cn(
				styles['profile__item'],
				styles['profile__name'],
				styles['profile__inactive']
			)}>
				<a href="#">{/*{userName}*/}Имя</a>
				<img src="/public/user-icon.svg" alt=""/>
			</div>
			<div className={cn(
				styles['profile__item'],
				styles['profile__logout'],
				styles['profile__inactive']
			)}>
				<a href="#">Выйти</a>
			</div>
		</div>
	);
}

export default Profile;