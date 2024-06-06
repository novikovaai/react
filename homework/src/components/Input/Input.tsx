import {forwardRef} from 'react';
import cn from 'classnames';
import {InputProps} from './Input.props';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(
	function Input({img, type, isValid=true, ...props}: InputProps, ref) {

	
		return (
			<>
				<div className={styles.test}>
					<img src={img} alt="" className={styles['search-img']}/>
					<input
						{...props}
						ref={ref}
						name={type}
						type="text"
						className={cn(styles.input, {
							[styles['input-img']]: img,
							[styles['invalid']]: !isValid
						})}
					/>
				</div>
			</>
		);
	}
);

export default Input;