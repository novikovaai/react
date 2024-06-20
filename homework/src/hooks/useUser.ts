import {useContext} from "react";
import {UserContext} from "../context/user.tsx";


export function useUser() {
    const {userInfo, switchFavs, userLogout, addUserData} = useContext(UserContext);
    if (!switchFavs || !userLogout || !addUserData) {
       throw new Error("useUser() is missing");
    }
    return {userInfo, switchFavs, userLogout, addUserData};
}