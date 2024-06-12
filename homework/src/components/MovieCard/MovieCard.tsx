import cn from 'classnames';
import {MovieCardProps} from './MovieCard.props.ts';
import styles from './MovieCard.module.css';
import {useUserContext} from "../../hooks/useUserContext.ts";
import {useCallback} from "react";

function MovieCard({reviews, poster, title, id} : MovieCardProps) {
	const {userInfo,switchFavs} = useUserContext();
	const inFavs = userInfo.favList.includes(id);
	const toSwitch = useCallback(() => {
		switchFavs(id)
	}, []);

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