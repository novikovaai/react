import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({children}: ButtonProps) {

	return (
		<>
			<button className={styles.button}>{children}</button>
		</>
	);
}

export default Button;