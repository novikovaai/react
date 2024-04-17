import styles from'./CardButton.module.css';
import {CardButtonProps} from './CardButton.props';

function CardButton({children}: CardButtonProps) {
	return (
		<>
			<button className={styles['card-button']}>{children}</button>
		</>
	);
}

export default CardButton;