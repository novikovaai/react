import {Outlet} from 'react-router-dom';
import Menu from "../Menu/Menu.tsx";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Profile from "../../components/Profile/Profile.tsx";
import {UserContextProvider} from '../../context/user.tsx';
import styles from './AuthLayout.module.css';

export function AuthLayout() {

    return(
    <UserContextProvider>
        <>
        <div className={styles.container}>
            <Menu>
                <Navigation/>
                <Profile/>
            </Menu>
        </div>
        <div className={ styles['content'] }><Outlet/></div>
    </>;
    </UserContextProvider>)
}