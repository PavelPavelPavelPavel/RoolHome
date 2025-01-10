const Navigation = () => {
	return (
		<nav className='flex justify-center items-center dark:text-gray'>
			<ul className='navigation__list'>
				<li className='navigation__item'>
					<a href='#'>О нас</a>
				</li>
				<li className='navigation__item'>
					<a href='#'>Галерея</a>
				</li>
				<li className='navigation__item'>
					<a href='#'>Контактная информация</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
