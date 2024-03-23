import styles from './MovieCard.module.css';
import {useContext, useState} from 'react';
import cn from 'classnames';
import {UserContext} from '../../context/user.context.jsx';

function MovieCard({reviews, poster, title, id}) {


	const {userInfo,switchFavs} = useContext(UserContext);
	const inFavs = userInfo.favList.includes(id)
	const toSwitch = () => switchFavs(id)

	return (
		<>
			<div className={styles['movie-card__reviews']}>
				<img src="/public/star-icon.svg" alt="Иконка звезды"/>
				{reviews}
			</div>
			<img src={poster} alt="Постер фильма" className={styles['movie-card__poster']}/>
			<div className={styles['movie-card__title']}>{title}</div>
			<div onClick={toSwitch}>
				<div className={cn(styles['movie-card__favorites'], {
					[styles['in-fav']]: inFavs

				})}>
					<img src={'/public/' + (inFavs ? 'favorites-active.svg' : 'like-icon.svg')} alt=''/>
					{'В избранно' + (inFavs ? 'м' : 'е')}
				</div>
			</div>
		</>
	);
}

export default MovieCard;