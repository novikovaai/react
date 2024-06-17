import {HeadingProps} from './Heading.props';
import styles from './Heading.module.css';

function Heading({children}: HeadingProps) {

	return (
		<>
			<h1 className={styles.h1}>{children}</h1>
		</>
	);
}

export default Heading;