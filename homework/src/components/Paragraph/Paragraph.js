import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './Paragraph.module.css';
function Paragraph({ children }) {
    return (_jsx(_Fragment, { children: _jsx("p", { className: styles.text, children: children }) }));
}
export default Paragraph;
