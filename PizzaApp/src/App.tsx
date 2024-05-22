import { MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input.tsx';
import { Route, Routes } from 'react-router-dom';
import {Menu} from './pages/Menu/Menu.tsx';
import {Cart} from './pages/Cart/Cart.tsx';

function App() {
	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};
	return (
		<>
			{/*<Button onClick={addCounter} >Кнопка</Button >*/}
			{/*<Button appearance='big' onClick={addCounter}>Кнопка</Button >*/}
			{/*<Input placeholder='Email'/>*/}
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
