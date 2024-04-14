import cn from 'classnames';
import style from './Input.module.css';
import { InputProps } from './Input.props';
import {forwardRef} from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input({isValid = true, className, ...props}, ref) {

		return (
			<input ref={ref}  className={cn(style['input'], className, {
				[style['invalid']]: !isValid
			})} {...props}/>
		);
	}
);

export default Input;