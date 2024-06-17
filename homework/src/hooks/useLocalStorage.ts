import { useState, useEffect } from 'react';


export function useLocalStorage<T>(key: string) : [T[], (newData: T[]) => void] {
	const [data, setData] = useState<T[]>([]);

	useEffect(() => {
		const item = localStorage.getItem(key);
		if(item){
			const res: [] = JSON.parse(item);
			if (res) {
				setData(res);
			}
		}

	}, []);
	const saveData = (newData: T[]) => {
		console.log(newData);
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}