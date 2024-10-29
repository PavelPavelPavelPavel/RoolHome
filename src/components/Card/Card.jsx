const Card = ({ name, photo }) => {
	return (
		<li className='flex flex-col items-center gap-2 border-black  border-2 rounded-md overflow-hidden bg-red bg-opacity-45 last:-col-start-2 last:-col-end-4'>
			<h3 className='pt-2 py-2 text-lg font-bold h-9 line-clamp-1'>
				{name}
			</h3>
			<img
				className='min-w-64 h-60 box-border border-t-2 object-cover'
				src={photo}
				alt={name}></img>
		</li>
	);
};

export default Card;
