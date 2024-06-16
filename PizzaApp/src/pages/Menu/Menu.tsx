import Header from '../../components/Header/Header.tsx';
import Search from '../../components/Search/Search.tsx';
import style from './Menu.module.css';
import {PREFIX} from '../../helpers/API.ts';
import {Product} from '../../interfaces/product.interface.ts';
import {useEffect, useState} from 'react';
import axios, {AxiosError} from 'axios';
import {MenuList} from './MenuList/MenuList.tsx';


export function Menu() {

	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setLoading(true);

			const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setLoading(false);

		} catch (e) {
			console.log(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setLoading(false);
			return;
		}

	};

	useEffect(() => {
		getMenu();
	}, []);
	return <>
		<div className={style['menu_header']}>
			<Header>Меню</Header>
			<Search placeholder='Введите блюдо или состав'/>
		</div>
		<div>
			{error && <>{error}</>}
			{!loading && <MenuList products={products} />}
			{loading && <>Загружаем продукты...</>}

		</div>
	</>;
}