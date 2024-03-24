import styles from './Heading.module.css';

function Heading({text}) {

	return (
		<>
			<h1 className={styles.h1}>{text}</h1>
		</>
	);
}

export default Heading;