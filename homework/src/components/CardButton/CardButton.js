import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './CardButton.module.css';
function CardButton({ children }) {
    return (_jsx(_Fragment, { children: _jsx("button", { className: styles['card-button'], children: children }) }));
}
export default CardButton;
