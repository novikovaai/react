import './MovieCard.css';
import {useState} from 'react';

function MovieCard({reviews, poster, title}) {

	const favorites = {
		toFavs: {
			className: 'movie-card__favorites',
			img: '/public/like-icon.svg',
			alt: 'Иконка лайка',
			text: 'В избранное'
		},
		fromFavs: {
			className: 'movie-card__favorites in-fav',
			img: '/public/favorites-active.svg',
			alt: 'Добавлено в избранное',
			text: 'В избранном'
		}
	};

	const [favsState, setFavsState] = useState(favorites.toFavs);
	const switchFavs = () => {
		setFavsState(oldData => {
			if (oldData === favorites.toFavs) {
				return favorites.fromFavs;
			} else {
				favorites.toFavs;
			}

		});
	};


	return (
		<>
			<div className="movie-card__reviews">
				<img src="/public/star-icon.svg" alt="Иконка звезды"/>
				{reviews}
			</div>
			<img src={poster} alt="Постер фильма" className='movie-card__poster'/>
			<div className='movie-card__title'>{title}</div>
			<div onClick={switchFavs}>
				<div className={favsState.className}>
					<img src={favsState.img} alt={favsState.alt}/>
					{favsState.text}
				</div>
			</div>

		</>
	);
}

export default MovieCard;