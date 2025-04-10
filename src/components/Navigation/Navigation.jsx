const Navigation = () => {

	return (
		<nav className='sticky top-2 z-50 flex justify-center items-center dark:text-gray bg'>
			<ul className='navigation__list bg-black'>
				<li className='navigation__item'>
					<a href='#about'>О нас</a>
				</li>
				<li className='navigation__item'>
					<a href='#gallery'>Галерея</a>
				</li>
				<li className='navigation__item'>
					<a href='#footer'>Контактная информация</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
