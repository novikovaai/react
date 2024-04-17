import styles from './Heading.module.css';
import {HeadingProps} from './Heading.props';

function Heading({children}: HeadingProps) {

	return (
		<>
			<h1 className={styles.h1}>{children}</h1>
		</>
	);
}

export default Heading;