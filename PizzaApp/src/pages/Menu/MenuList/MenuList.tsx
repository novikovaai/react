import ProdCard from '../../../components/ProdCard/ProdCard.tsx';
import {MenuListProps} from './MenuList.props.ts';
import styles from './MenuList.module.css';

export function MenuList ({products}: MenuListProps) {
	return <div className={styles['menu-list']}>{products.map((p) => (
		<ProdCard
			key={p.id}
			title={p.name}
			description={p.ingredients.join(', ')}
			price={p.price}
			rating={p.rating}
			image={p.image}
			id={p.id}
		/>
	))}
	</div>;

}