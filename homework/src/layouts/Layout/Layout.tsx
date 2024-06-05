import {Outlet} from 'react-router-dom';

import styles from './Layout.module.css';
import Button from '../../components/Button/Button.tsx';
import cn from 'classnames';
import Menu from "../Menu/Menu.tsx";
import Navigation from "../../components/Navigation/Navigation.tsx";
import Profile from "../../components/Profile/Profile.tsx";
import {UserContextProvider} from '../../context/user.context';

export function Layout() {

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