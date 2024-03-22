import styles from './MovieCard.module.css';
import {useContext, useState} from 'react';
import cn from 'classnames';
import {UserContext} from '../../context/user.context.jsx';

function MovieCard({reviews, poster, title, id, func}) {


	const {userInfo} = useContext(UserContext);
	const [favs, setFavs] = useState(userInfo.favList.includes(id));

	const switchFavs = () => {
		func(id)
		setFavs(userInfo.favList.includes(id))
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
					[styles['in-fav']]: favs
				})}>
					<img src={'/public/' + (favs ? 'favorites-active.svg' : 'like-icon.svg')} alt=''/>
					{'В избранно' + (favs ? 'м' : 'е')}
				</div>
			</div>
		</>
	);
}

export default MovieCard;