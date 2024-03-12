import styles from './Profile.module.css';
import cn from 'classnames';
import {useContext} from 'react';
import {UserContext} from '../../context/user.context.jsx';
import {useLocalStorage} from '../../hooks/use-localstorage.hook.js';


function Profile() {

	const {userInfo, setUserInfo} = useContext(UserContext);
	const [userData, setUserData] = useLocalStorage('users');

	const logout = () => {
		setUserInfo({
			name: '',
			isLogged: false,
			favList: []
		});
		setUserData([...userData.map(i => ({
			...i,
			isLogged: false
		}))]);
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