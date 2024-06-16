import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, defer, RouterProvider} from 'react-router-dom';
import {Menu} from './pages/Menu/Menu.tsx';
import {Cart} from './pages/Cart/Cart.tsx';
import {Error as ErrorPage} from './pages/Error/Error.tsx';
import {Layout} from './layout/Layout/Layout.tsx';
import {Product} from './pages/Product/Product.tsx';
import axios from 'axios';
import {PREFIX} from './helpers/API.ts';

const router = createBrowserRouter([
	{ 	path: '/',
		element: <Layout/>,
		children: [
			{ 	path: '/cart',
				element: <Cart/>
			},
			{ 	path: '/',
				element: <Menu/>
			},
			{ 	path: '/product/:id',
				element: <Product/>,
				errorElement: <>Ошибка</>,
				loader: async ({params}) => {
					// return defer({
					// 	data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
					// });
					return defer({
						data: new Promise((resolve, reject) => { setTimeout(() => {
							axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
						}, 2000); })

					});

					// const {data} = await axios.get(`${PREFIX}/products/${params.id}`);
					// return data;
				}
			}
			
		]
	},
	{ 	path: '*',
		element: <ErrorPage/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
