import './Form.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function Form({type, placeholder, img, text, formClass}) {

	const submitForm = (e) => {
		e.preventDefault();
		const formDate = new FormData(e.target);
		const formProps = Object.fromEntries(formDate);
		console.log(formProps);
	};

	return (
		<>
			<form action="" className={formClass} onSubmit={submitForm}>
				<Input
					placeholder={placeholder}
					img={img}
					type={type}
				/>
				<Button
					text={text}
				/>
			</form>
		</>
	);
}

export default Form;