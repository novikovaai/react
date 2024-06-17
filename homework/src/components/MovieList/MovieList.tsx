import CardButton from '../CardButton/CardButton.tsx';
import MovieCard from '../MovieCard/MovieCard.tsx';
import styles from './MovieList.module.css';
import {MovieListProps} from "./MovieList.props.ts";

function MovieList({movies} : MovieListProps) {


	if (movies.length === 0) {
		return <p className={styles['movie-info']}>Давайте что-нибудь найдем!</p>;
	}


	return 	<div className={styles['movies-list']}>
		{movies.map(e => {
			return	<MovieCard
					key={e.imdbID}
					reviews={'1'}
					poster={e.Poster}
					id={e.imdbID}
					title={e.Title}
				/>;
		})}
	</div>;
}

export default MovieList;

