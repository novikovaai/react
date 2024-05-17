import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button.tsx';
import { formType, INITIAL_STATE, formReducer } from './Form.state';
import { useRef, useReducer, useEffect, useContext } from 'react';
import { UserContext } from '../../context/user.context.tsx';
function Form({ type, func }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, value, isFormReadyToSubmit } = formState;
    const inputRef = useRef(null);
    const { addUserData } = useContext(UserContext);
    const focusError = (isValid) => {
        if (!isValid) {
            inputRef.current?.focus();
        }
    };
    useEffect(() => {
        let timerID;
        if (!isValid) {
            focusError(isValid);
            timerID = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 2000);
        }
        return () => {
            clearTimeout(timerID);
        };
    }, [isValid]);
    useEffect(() => {
        if (isFormReadyToSubmit) {
            if (type === 'login') {
                if (addUserData) {
                    addUserData(value);
                }
                dispatchForm({ type: 'CLEAR' });
            }
            else {
                if (func) {
                    func(value);
                }
            }
        }
    }, [isFormReadyToSubmit, value, func, type]);
    const onChange = (e) => {
        console.log(e.target);
        const targ = e.target;
        dispatchForm({ type: 'SET_VALUE', payload: { value: targ.value } });
    };
    const submitForm = (e) => {
        e.preventDefault();
        if (e.target) {
            const form = e.target;
            const formDate = new FormData(form);
            const formProps = Object.fromEntries(formDate);
            const toSend = formProps[Object.keys(formProps)[0]];
            dispatchForm({ type: 'SUBMIT', payload: toSend });
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("form", { action: "", className: styles[formType[type].formClass], onSubmit: submitForm, children: [_jsx(Input, { placeholder: formType[type].placeholder, img: formType[type].img, type: type, ref: inputRef, onChange: onChange, value: value, isValid: isValid }), _jsx(Button, { children: formType[type].text })] }) }));
}
export default Form;
