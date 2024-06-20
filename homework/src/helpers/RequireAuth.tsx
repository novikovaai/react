import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useUser} from "../hooks/useUser.ts";


export const RequireAuth = ({children} : {children: ReactNode}) => {
    const {userInfo} = useUser()

    if (!userInfo.isLogged) {
        return <Navigate to={'/login'} replace />;
    }
    return children;
}