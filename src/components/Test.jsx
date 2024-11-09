import photo from "../images/slider/2.jpeg";

const Test = () => {
	return (
		<div className=' relative mt-10 w-96 h-96 border-2 border-black overflow-hidden'>
			<div className='w-full h-full animate-pulseBg absolute top-0 right-0 bottom-0 left-0'></div>
			<img
				src={photo}
				alt='фото'
				className=' w-full h-full object-cover'></img>
		</div>
	);
};

export default Test;
