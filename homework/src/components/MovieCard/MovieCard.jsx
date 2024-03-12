import styles from './MovieCard.module.css';
import {useState} from 'react';
import cn from 'classnames';

function MovieCard({reviews, poster, title, inFavs}) {



	const [favsState, setFavsState] = useState(inFavs);
	const switchFavs = () => {
		setFavsState(oldData => {
			return !oldData;
		});
	};


	return (
		<>
			<div className={styles['movie-card__reviews']}>
				<img src="/public/star-icon.svg" alt="Иконка звезды"/>
				{reviews}
			</div>
			<img src={poster} alt="Постер фильма" className={styles['movie-card__poster']}/>
			<div className={styles['movie-card__title']}>{title}</div>
			<div onClick={switchFavs}>
				<div className={cn(styles['movie-card__favorites'], {
					[styles['in-fav']]: favsState
				})}>
					<img src={'/public/' + (favsState ? 'favorites-active.svg' : 'like-icon.svg')} alt=''/>
					{'В избранно' + (favsState ? 'м' : 'е')}
				</div>
			</div>
		</>
	);
}

export default MovieCard;