import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Profile.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.tsx';
function Profile() {
    const { userInfo, userLogout } = useContext(UserContext);
    const logout = () => {
        if (userLogout) {
            userLogout();
        }
    };
    return (_jsxs("div", { className: styles.profile, children: [_jsxs("div", { className: cn(styles['profile__item'], styles['profile__login'], {
                    [styles['profile__inactive']]: userInfo.isLogged
                }), children: [_jsx("a", { href: "#", children: "\u0412\u043E\u0439\u0442\u0438" }), _jsx("img", { src: "/public/login-icon.svg", alt: "" })] }), _jsxs("div", { className: cn(styles['profile__item'], styles['profile__name'], {
                    [styles['profile__inactive']]: !userInfo.isLogged
                }), children: [_jsx("a", { href: "#", children: userInfo.name }), _jsx("img", { src: "/public/user-icon.svg", alt: "" })] }), _jsx("button", { onClick: logout, className: cn(styles['profile__item'], styles['profile__logout'], {
                    [styles['profile__inactive']]: !userInfo.isLogged
                }), children: "\u0412\u044B\u0439\u0442\u0438" })] }));
}
export default Profile;
