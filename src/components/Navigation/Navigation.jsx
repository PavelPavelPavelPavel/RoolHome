const Navigation = () => {
	return (
		<nav className='flex justify-center items-center dark:text-gray'>
			<ul className='navigation__list'>
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
