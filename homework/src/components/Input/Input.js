import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './Input.module.css';
import { forwardRef } from 'react';
import cn from 'classnames';
const Input = forwardRef(function Input({ img, type, isValid = true, ...props }, ref) {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.test, children: [_jsx("img", { src: img, alt: "", className: styles['search-img'] }), _jsx("input", { ...props, ref: ref, name: type, type: "text", className: cn(styles.input, {
                        [styles['input-img']]: img,
                        [styles['invalid']]: !isValid
                    }) })] }) }));
});
export default Input;
