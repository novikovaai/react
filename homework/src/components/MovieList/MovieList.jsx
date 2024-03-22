import styles from './MovieList.module.css';
import CardButton from '../CardButton/CardButton.jsx';
import MovieCard from '../MovieCard/MovieCard.jsx';
import {useContext} from 'react';
import {UserContext} from '../../context/user.context.jsx';


function MovieList() {
	const movies = [
		{
			id: 1,
			reviews: 324,
			poster: '/public/posters/black-widow-poster.jpg',
			title: 'Black Widow'
		},
		{
			id: 2,
			reviews: 124,
			poster: '/public/posters/shang-chi-poster.jpg',
			title: 'Shang Chi'
		},
		{
			id: 3,
			reviews: 235,
			poster: '/public/posters/loki-poster.jpg',
			title: 'Loki'
		},
		{
			id: 4,
			reviews: 123,
			poster: '/public/posters/how-i-met-your-mother-poster.jpg',
			title: 'How I Met Your Mother'
		},
		{
			id: 5,
			reviews: 8125,
			poster: '/public/posters/money-heist-poster.jpg',
			title: 'Money Heist'
		},
		{
			id: 6,
			reviews: 123,
			poster: '/public/posters/friends-poster.jpg',
			title: 'Friends'
		},
		{
			id: 7,
			reviews: 12,
			poster: '/public/posters/the-big-bang-theory-poster.jpg',
			title: 'The Big Bang Theory'
		},
		{
			id: 8,
			reviews: 456,
			poster: '/public/posters/two-and-a-half-men-poster.jpg',
			title: 'Two And a Half Men'
		}

	];
	const {userInfo, setUserInfo} = useContext(UserContext);
	if (movies.length === 0) {
		return <p>Давайте что-нибудь найдем!</p>;
	}

	const switchFavs = (id) => {
		const inFavs = userInfo.favList.indexOf(id);
		if(inFavs > -1) {
			setUserInfo(oldData => {
				oldData.favList.splice(inFavs);
				return oldData;
			});
		} else {
			setUserInfo(oldData => {
				oldData.favList.push(id);
				return oldData;
			});
		}
	};
	console.log(userInfo)
	return 	<div className={styles['movies-list']}>
		{movies.map(e => {
			return <CardButton key={e.id}>
				<MovieCard
					reviews={e.reviews}
					poster={e.poster}
					func={switchFavs}
					id={e.id}
					inFavs={userInfo.favList.includes(e.id)}
				/>
			</CardButton>;
		})}
	</div>;
}

export default MovieList;

