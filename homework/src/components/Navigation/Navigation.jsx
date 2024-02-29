import './Navigation.css';

function Navigation() {

	return (
		<nav className='navigation'>
			<a href="#" className='navigation__item navigation__search navigation__active'>Поиск фильмов</a>
			<div className="navigation__item navigation__favorites">
				<a href="#" className='navigation__my'>Мои фильмы</a>
				<div className='navigation__count'>0</div>
			</div>
		</nav>
	);
}

export default Navigation;