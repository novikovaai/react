import styles from './ProdCard.module.css';
import { ProdCardProps } from './ProdCard.props';
import {Link} from 'react-router-dom';



function ProdCard({ title, description, price, rating, image, id }: ProdCardProps) {

	return (
		<Link to={`/product/${id}`}>
			<div className={styles['card-container']}>
				<div className={styles['card_top']}>
					<img className={styles['card_img']} src={image}/>
					<div className={styles['card_price']}>
						{price} <span className={styles['currency']}> ₽	</span>
					</div>
					<button className={styles['card_buy']}>
						<img src='/buy-icon.svg' />
					</button>
					<div className={styles['card_rating']}>
						{rating} <img src='/star-icon.svg'/>
					</div>
				</div>
				<div className={styles['card_info']}>
					<h2 className={styles['card_name']}>{title}</h2>
					<p className={styles['card_description']}>{description}</p>
				</div>
			</div>
		</Link>
	)
	;
}

export default ProdCard;
