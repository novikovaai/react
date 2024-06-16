import {Await, useLoaderData} from 'react-router-dom';
import type {Product} from '../../interfaces/product.interface.ts';
import {Suspense} from "react";

export function Product() {
	
	const data = useLoaderData() as { data: Product };

	return <>
		<Suspense fallback={<>Загрузка...</>}>
			<Await resolve={data.data}>
				{({data}: {data: Product}) => (
					<>Product - {data.name}</>
				)}
			</Await>
		</Suspense>
	</>;
}

