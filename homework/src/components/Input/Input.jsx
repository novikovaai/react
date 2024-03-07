import styles from './Input.module.css';
import {forwardRef, useState} from 'react';
import cn from 'classnames';

const Input = forwardRef(
	function Input({img, type, ...props}, ref) {

	
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
							[styles['input-img']]: img
						})}
					/>
				</div>
			</>
		);
	}
);

export default Input;