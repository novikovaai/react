import style from './Logo.module.css';
import {memo} from 'react';

function Logo({image}) {
	return <img className={style.logo} src={image} alt=""/>
}

export default memo(Logo);
