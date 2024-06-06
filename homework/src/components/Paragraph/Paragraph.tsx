import {ParagraphProps} from './Paragraph.props';
import styles from './Paragraph.module.css';

function Paragraph({children}: ParagraphProps) {

	return (
		<>
			<p className={styles.text}>{children}</p>
		</>
	);
}

export default Paragraph;