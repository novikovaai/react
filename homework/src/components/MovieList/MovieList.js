import { jsx as _jsx } from "react/jsx-runtime";
import styles from './MovieList.module.css';
import CardButton from '../CardButton/CardButton.tsx';
import MovieCard from '../MovieCard/MovieCard.tsx';
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
    if (movies.length === 0) {
        return _jsx("p", { children: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043D\u0430\u0439\u0434\u0435\u043C!" });
    }
    return _jsx("div", { className: styles['movies-list'], children: movies.map(e => {
            return _jsx(CardButton, { children: _jsx(MovieCard, { reviews: e.reviews, poster: e.poster, id: e.id, title: e.title }) }, e.id);
        }) });
}
export default MovieList;
