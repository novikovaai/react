import './MovieCard.css';
import {useState} from 'react';

function MovieCard({reviews, poster, title, inFavs}) {



	const [favsState, setFavsState] = useState(inFavs);
	const switchFavs = () => {
		setFavsState(oldData => {
			return !oldData;
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
				<div className={'movie-card__favorites' + (favsState ? ' in-fav' : '')}>
					<img src={'/public/' + (favsState ? 'favorites-active.svg' : 'like-icon.svg')} alt=''/>
					{'В избранно' + (favsState ? 'м' : 'е')}
				</div>
			</div>

		</>
	);
}

export default MovieCard;