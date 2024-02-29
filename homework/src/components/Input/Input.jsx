import styles from './Input.module.css';
import {useState} from 'react';
import cn from 'classnames';

function Input({placeholder, img, type}) {

	const [inputData, setInputData] = useState('');
	const inputChange = (e) => {
		setInputData(e.target.value);
	};

	return (
		<>
			<div className={styles.test}>
				<img src={img} alt="" className={styles['search-img']}/>
				<input
					name={type}
					value={inputData}
					onChange={inputChange}
					type="text"
					placeholder={placeholder}
					className={cn(styles.input, {
						[styles['input-img']]: img
					})}
				/>
			</div>
		</>
	);
}

export default Input;