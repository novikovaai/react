import cn from 'classnames';
import {MovieCardProps} from './MovieCard.props.ts';
import styles from './MovieCard.module.css';
import {useUser} from "../../hooks/useUser.ts";
import React from "react";
import {Link} from "react-router-dom";

function MovieCard({reviews, poster, title, id} : MovieCardProps) {
	const {userInfo,switchFavs} = useUser();
	const inFavs = userInfo.favList.includes(id);
	const toSwitch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		e.preventDefault();
		switchFavs(id)
	};

	return (
		<Link to={`/movie/${id}`} className={styles['movie-card__wrapper']}>
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
		</Link>
	);
}

export default MovieCard;