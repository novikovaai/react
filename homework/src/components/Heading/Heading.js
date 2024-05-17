import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './Heading.module.css';
function Heading({ children }) {
    return (_jsx(_Fragment, { children: _jsx("h1", { className: styles.h1, children: children }) }));
}
export default Heading;
