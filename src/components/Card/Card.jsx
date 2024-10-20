const Card = ({ name, photo }) => {
	return (
		<li className='flex flex-col items-center gap-2 border-dark-black border-4 rounded-md'>
			<h3 className='pt-2 text-lg font-bold'>{name}</h3>
			<img
				className='w-72 h-60 box-border border-t-2'
				src={photo}
				alt={name}></img>
		</li>
	);
};

export default Card;
