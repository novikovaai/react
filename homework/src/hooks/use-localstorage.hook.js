import { useState, useEffect } from 'react';
export function useLocalStorage(key) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const item = localStorage.getItem(key);
        if (item) {
            const res = JSON.parse(item);
            if (res) {
                setData(res);
            }
        }
    }, []);
    const saveData = (newData) => {
        console.log(newData);
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };
    return [data, saveData];
}
