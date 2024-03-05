import './Input.css';
import {useState} from 'react';

function Input({placeholder, img, type}) {
	const cls = () => {
		if (img) {
			return 'input input-img';
		}
		return 'input';
	};
	const [inputData, setInputData] = useState('');
	const inputChange = (e) => {
		setInputData(e.target.value);
	};

	return (
		<>
			<div className='test'>
				<img src={img} alt="" className='search-img'/>
				<input
					name={type}
					value={inputData}
					onChange={inputChange}
					type="text"
					placeholder={placeholder}
					className={cls()}
				/>
			</div>
		</>
	);
}

export default Input;