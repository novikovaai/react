import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './MovieCard.module.css';
import { useContext } from 'react';
import cn from 'classnames';
import { UserContext } from '../../context/user.context.tsx';
function MovieCard({ reviews, poster, title, id }) {
    const { userInfo, switchFavs } = useContext(UserContext);
    const inFavs = userInfo.favList.includes(id);
    const toSwitch = () => {
        if (switchFavs) {
            switchFavs(id);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles['movie-card__reviews'], children: [_jsx("img", { src: "/public/star-icon.svg", alt: "\u0418\u043A\u043E\u043D\u043A\u0430 \u0437\u0432\u0435\u0437\u0434\u044B" }), reviews] }), _jsx("img", { src: poster, alt: "\u041F\u043E\u0441\u0442\u0435\u0440 \u0444\u0438\u043B\u044C\u043C\u0430", className: styles['movie-card__poster'] }), _jsx("div", { className: styles['movie-card__title'], children: title }), _jsx("div", { onClick: toSwitch, children: _jsxs("div", { className: cn(styles['movie-card__favorites'], {
                        [styles['in-fav']]: inFavs
                    }), children: [_jsx("img", { src: '/public/' + (inFavs ? 'favorites-active.svg' : 'like-icon.svg'), alt: '' }), 'В избранно' + (inFavs ? 'м' : 'е')] }) })] }));
}
export default MovieCard;
