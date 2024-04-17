import {createContext, ReactNode, useState} from 'react';
import {useLocalStorage} from '../hooks/use-localstorage.hook.ts';
import {ContextProps} from "./Context.props.ts";

export interface User {
	name: string,
	isLogged: boolean,
	favList: number[]
}


export const UserContext = createContext<User>(
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

export const UserContextProvider = ({children}: ContextProps) => {
	const [userInfo, setUserInfo] = useState<User>({
		name: '',
		isLogged: false,
		favList: []
	});
	const [userData, setUserData] = useLocalStorage<User[]>('users');

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
			setUserInfo({
				name: userExists.name,
				isLogged: true,
				favList: userExists.favList
			});
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
		setUserData(userData.map(el => {
			if (el.name === userInfo.name) {
				return {
					...el,
					favList: userInfo.favList,
					isLogged: false
				};
			} else {
				return {
					...el,
					isLogged: false
				};
			}
		}));
		setUserInfo({
			name: '',
			isLogged: false,
			favList: []
		});
	};
	const switchFavs = (id) => {
		const inFavs = userInfo.favList.indexOf(id);
		console.log(userInfo.favList);
		if(inFavs > -1) {
			userInfo.favList.splice(inFavs, 1);
			setUserInfo({...userInfo});
		} else {
			userInfo.favList.push(id);
			setUserInfo({...userInfo});
		}
	};
		
	return <UserContext.Provider value={{userInfo, switchFavs, userLogout, addUserData}}>
		{children}
	</UserContext.Provider>;
};