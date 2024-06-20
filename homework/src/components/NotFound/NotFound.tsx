import styles from './NotFound.module.css';


export function NotFound() {
    return <>
        <h3 className={styles['h3']}>Упс... Ничего не найдено</h3>
        <p className={styles['p']}>Попробуйте изменить запрос или ввести более точное название фильма</p>
    </>
}