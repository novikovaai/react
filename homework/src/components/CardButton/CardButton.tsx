import {CardButtonProps} from './CardButton.props';
import styles from'./CardButton.module.css';
import {Link} from "react-router-dom";

function CardButton({children}: CardButtonProps) {
	return (
		<>
			<Link to={`/`}>
				<button className={styles['card-button']}>{children}</button>
			</Link>
		</>
	);
}

export default CardButton;