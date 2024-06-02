import Header from '../../components/Header/Header.tsx';
import Search from '../../components/Search/Search.tsx';
import style from './Menu.module.css';
import ProdCard from '../../components/ProdCard/ProdCard.tsx';

const pizza = {
	name: 'Наслаждение',
	description: 'Салями, руккола, помидоры, оливки',
	price: 300,
	rating: 4.5,
	img: '/pizza.jpg'
};

export function Menu() {
	return <>
		<div className={style['menu_header']}>
			<Header>Меню</Header>
			<Search placeholder='Введите блюдо или состав'/>
		</div>
		<div>
			<ProdCard 
				title={pizza.name}
				description={pizza.description}
				price={pizza.price}
				rating={pizza.rating}
				image={pizza.img}
				id={1}
			/>
		</div>
	</>;
}