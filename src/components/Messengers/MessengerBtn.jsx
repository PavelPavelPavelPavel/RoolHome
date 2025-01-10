const MessengerBtn = ({ name, src }) => {
	return (
		<li className='messengers__list-item'>
			<a target='blanc' href={name} className='messengers__link'>
				<img className='rounded-full' src={src} alt='icon' />
			</a>
		</li>
	);
};

export default MessengerBtn;
