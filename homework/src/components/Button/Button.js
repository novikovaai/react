import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './Button.module.css';
function Button({ children }) {
    return (_jsx(_Fragment, { children: _jsx("button", { className: styles.button, children: children }) }));
}
export default Button;
