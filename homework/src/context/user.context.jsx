import {createContext, useEffect, useState} from 'react';
import {useLocalStorage} from '../hooks/use-localstorage.hook.js';


export const UserContext = createContext(
	{
		name: '',
		isLogged: false,
		favList: []
	}
);

function mapItems(data) {
	if (!data) {
		return [];
	}
	return data.map(i => ({
		...i,
		isLogged: false
	}));
}

export const UserContextProvider = ({children}) => {
	const [userInfo, setUserInfo] = useState({
		name: '',
		isLogged: false,
		favList: []
	});
	const [userData, setUserData] = useLocalStorage('users');

	const addUserData = item => {
		const userExists = userData.find(el => el.name === item);
		if (userExists) {
			setUserData(userData.map(el => {
				if (el.name === userExists.name) {
					return {
						...el,
						isLogged: true
					};
				} else {
					return {
						...el,
						isLogged: false
					};
				}
			}));
			setUserInfo(userExists);
			return;
		}
		setUserData([...mapItems(userData), {
			name: item,
			isLogged: true,
			favList: []
		}]);
		setUserInfo({
			name: item,
			isLogged: true,
			favList: []
		});
	};
	const userLogout = () => {
		setUserData(mapItems(userData));
		setUserInfo({
			name: '',
			isLogged: false,
			favList: []
		});
	};
	console.log(userInfo)
	return <UserContext.Provider value={{userInfo, setUserInfo, userLogout, addUserData}}>
		{children}
	</UserContext.Provider>;
};