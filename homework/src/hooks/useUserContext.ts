import {useContext} from "react";
import {UserContext} from "../context/user.tsx";


export function useUserContext() {
    const {userInfo, switchFavs, userLogout, addUserData} = useContext(UserContext);
    if (!switchFavs || !userLogout || !addUserData) {
        throw Error("Ошибка контекста");
    }
    return {userInfo, switchFavs, userLogout, addUserData};
}