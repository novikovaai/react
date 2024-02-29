import './Profile.css';

function Profile() {

	return (
		<div className='profile'>
			<div className='profile__item profile__login'>
				<a href="#">Войти</a>
				<img src="/public/login-icon.svg" alt=""/>
			</div>
			<div className="profile__item profile__name profile__inactive">
				<a href="#">{/*{userName}*/}Имя</a>
				<img src="/public/user-icon.svg" alt=""/>
			</div>
			<div className='profile__item profile__logout profile__inactive'>
				<a href="#">Выйти</a>
			</div>
		</div>
	);
}

export default Profile;