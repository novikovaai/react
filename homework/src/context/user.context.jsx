import {createContext, useState} from 'react';

export const UserContext = createContext(
	{
		name: '',
		isLogged: false,
		favList: []
	}
);

export const UserContextProvider = ({children}) => {
	const [userInfo, setUserInfo] = useState({
		name: '',
		isLogged: false,
		favList: []
	});
	return <UserContext.Provider value={{userInfo, setUserInfo}}>
		{children}
	</UserContext.Provider>;
};