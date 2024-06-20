import {Link, useNavigate} from 'react-router-dom';
import Header from '../../components/Header/Header.tsx';
import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import styles from './Login.module.css';
import {FormEvent, useState} from 'react';
import axios, {AxiosError} from 'axios';
import {PREFIX} from '../../helpers/API.ts';
import {LoginResponse} from '../../interfaces/auth.interface.ts';

export type LoginForm = {
	email: {
		value: string;
	}
	password: {
		value: string;
	}
}

export function Login() {

	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const {email, password} = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {
			const {data} = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {email, password});
			console.log(data);
			localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch (error) {
			if (error instanceof AxiosError) {
				setError(error.response?.data.message);
			}
		}

	};

	return <div className={styles['login-container']}>
		<Header>Вход</Header>
		{error && <div className={styles['error']}>{error}</div>}
		<form className={styles['login-form']} onSubmit={submit}>
			<div className={styles['login__info']}>
				<label htmlFor="email">Ваш email</label>
				<Input placeholder="Email" name="email" id='email'/>
			</div>
			<div className={styles['login__info']}>
				<label htmlFor="password">Ваш пароль</label>
				<Input placeholder='Пароль' name='password' id='password' type='password'/>
			</div>
			<Button appearance={'big'}>Вход</Button>

		</form>
		<div className={styles['login-noaccount']}>
			<p>Нет аккаунта?</p>
			<Link to={'/'} className={styles['login__register']}>Зарегистрироваться</Link>
		</div>
	</div>;
}