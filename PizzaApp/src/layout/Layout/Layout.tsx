import {NavLink, Outlet} from 'react-router-dom';

import styles from './Layout.module.css';
import Button from '../../components/Button/Button.tsx';
import cn from 'classnames';

export function Layout() {

	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['profile']}>
				<img src='/avatar.svg' alt='Аватар пользователя'/>
				<div className={styles['profile__info']}>
					<div className={styles['profile__name']}>Антон Ларичев</div>
					<div className={styles['profile__email']}>alaricode@ya.ru</div>
				</div>
			</div>
			<div className={styles['side-menu_navigation']}>
				<div className={styles['menu']}>
					<NavLink to='/' className={({isActive}) => cn(styles['menu_item'], {
						[styles['active']]: isActive
					})}><img src='/menu-icon.svg'/>Меню</NavLink>
					<NavLink to='/cart' className={({isActive}) => cn(styles['menu_item'], {
						[styles['active']]: isActive
					})}><img src='/cart-icon.svg'/>Корзина <div
							className={styles['cart-counter']}>0</div></NavLink>
				</div>
			</div>
			<Button className={styles['logout-button']}><img src='/logout-icon.svg'/>Выйти</Button>
		</div>
		<div className={ styles['content'] }><Outlet/></div>
	</div>;
}