const Card = ({ name, photo }) => {
	return (
		<li className='flex flex-col items-center gap-2 border-black  border-2 rounded-md overflow-hidden'>
			<h3 className='pt-2 text-lg font-bold h-9 line-clamp-1'>{name}</h3>
			<img
				className='w-64 h-60 box-border border-t-2 object-cover'
				src={photo}
				alt={name}></img>
		</li>
	);
};

export default Card;
