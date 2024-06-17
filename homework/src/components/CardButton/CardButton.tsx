import {CardButtonProps} from './CardButton.props';
import styles from'./CardButton.module.css';

function CardButton({children}: CardButtonProps) {
	return (
		<>
			<button className={styles['card-button']}>{children}</button>
		</>
	);
}

export default CardButton;