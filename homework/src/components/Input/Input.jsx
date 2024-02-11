import './Input.css';

function Input({placeholder, img}) {
	const cls = () => {
		if (img) {
			return 'input input-img';
		}
		return 'input';
	};
	
	const isImg = () => {
		if (img) {
			return `/public/${img}.svg`;
		}
		return '';
	};
	return (
		<>
			<div className='test'>
				<img src={isImg()} alt="" className='search-img'/>
				<input type="text" placeholder={placeholder} className={cls()}/>
			</div>
		</>
	);
}

export default Input;