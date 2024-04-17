import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({children}: ButtonProps) {

	return (
		<>
			<button className={styles.button}>{children}</button>
		</>
	);
}

export default Button;