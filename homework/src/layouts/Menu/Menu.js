import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Menu.module.css';
import Logo from '../../components/Logo/Logo';
function Menu({ children }) {
    return (_jsxs("div", { className: styles.menu, children: [_jsx(Logo, {}), _jsx("div", { className: styles['menu__items'], children: children })] }));
}
export default Menu;
