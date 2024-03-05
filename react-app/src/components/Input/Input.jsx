import './Input.module.css';
import cn from 'classnames';
import style from '../JournalForm/JournalForm.module.css';
import {forwardRef} from 'react';

const Input = forwardRef(
	function Input({className, isValid = true, appearance, ...props}, ref) {

		return (
			<input {...props} ref={ref} className={cn(className, style['input'], {
				[style['invalid']]: !isValid,
				[style['input-title']]: appearance === 'title'
			})}/>
		);
	}
);  

export default Input;