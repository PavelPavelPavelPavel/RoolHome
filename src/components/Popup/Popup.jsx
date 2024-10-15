import { copyPhone } from "../../constants/constants";

const Popup = () => {
	return (
		<div className='absolute bottom-0 left-10 w-32 h-10 bg-dark-aquamarin border-2 border-black rounded-full'>
			<p className='font-normal text-xs'>{copyPhone}</p>
		</div>
	);
};

export default Popup;
