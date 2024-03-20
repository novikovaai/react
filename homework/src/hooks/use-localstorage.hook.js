import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState();
	const res = JSON.parse(localStorage.getItem(key));
	useEffect(() => {
		if (res) {
			setData(res);
		}
	}, []);
	console.log(data);
	const saveData = (newData) => {

		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
		console.log('Записано');
	};

	return [data, saveData];
}