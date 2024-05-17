import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Navigation.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.tsx';
function Navigation() {
    const { userInfo } = useContext(UserContext);
    return (_jsxs("nav", { className: styles.navigation, children: [_jsx("a", { href: "#", className: cn(styles['navigation__item'], styles['navigation__search'], styles['navigation__active']), children: "\u041F\u043E\u0438\u0441\u043A \u0444\u0438\u043B\u044C\u043C\u043E\u0432" }), _jsxs("div", { className: cn(styles['navigation__item'], styles['navigation__favorites']), children: [_jsx("a", { href: "#", className: styles['navigation__my'], children: "\u041C\u043E\u0438 \u0444\u0438\u043B\u044C\u043C\u044B" }), _jsx("div", { className: styles['navigation__count'], children: userInfo.favList.length })] })] }));
}
export default Navigation;
