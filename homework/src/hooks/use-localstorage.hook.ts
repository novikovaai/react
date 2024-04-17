import { useState, useEffect } from 'react';
import {User} from '../context/user.context.tsx';


export function useLocalStorage(key: string) {
	const [data, setData] = useState<[]>();

	useEffect(() => {
		const res: [] = JSON.parse(localStorage.getItem(key));
		if (res) {
			setData(res);
		}
	}, []);
	const saveData = (newData: User[]) => {

		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}