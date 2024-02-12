import './Form.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function Form({type}) {
	const formType = {
		'search': {
			placeholder: 'Введите название',
			img: '/public/search-icon.svg',
			text: 'Искать',
			formClass: 'form-search',
			submitForm(e) {
				e.preventDefault();
				const formDate = new FormData(e.target);
				const formProps = Object.fromEntries(formDate);
				console.log(formProps);
			}
		},
		'login': {
			placeholder: 'Ваше имя',
			img: '',
			text: 'Войти в профиль',
			formClass: 'form-login',
			submitForm(e) {
				e.preventDefault();
				const formDate = new FormData(e.target);
				const formProps = Object.fromEntries(formDate);
				console.log(formProps);
			}
		}
	};

	return (
		<>
			<form action="" className={formType[type].formClass} onSubmit={formType[type].submitForm}>
				<Input
					placeholder={formType[type].placeholder}
					img={formType[type].img}
					type={type}
				/>
				<Button
					text={formType[type].text}
				/>
			</form>
		</>
	);
}

export default Form;