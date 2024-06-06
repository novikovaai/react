import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Favorites} from './pages/Favorites/Favorites.tsx';
import {Login} from './pages/Login/Login.tsx';
import {Movie} from './pages/Movie/Movie.tsx';
import {Layout} from './layouts/Layout/Layout.tsx';
import {Search} from './pages/Search/Search.tsx';
import {Error} from './pages/Error/Error.tsx';
import './index.css';

const router = createBrowserRouter([
	{ 	path: '/',
		element: <Layout/>,
		children: [
			{ 	path: '/login',
				element: <Login/>
			},
			{ 	path: '/favorites',
				element: <Favorites/>
			},
			{ 	path: '/',
				element: <Search/>
			},
			{ 	path: '/movie/:id',
				element: <Movie/>
			}

		]
	},
	{ 	path: '*',
		element: <Error/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
