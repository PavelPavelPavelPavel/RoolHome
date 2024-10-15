import { sliderTitle } from "../../constants/constants";
import glassHouseFirst from "../../images/slider/glassHouseFirst.jpg";
import lightHouse from "../../images/slider/lightHouse.jpeg";
import windowOpened from "../../images/slider/windowOpened.jpeg";
import windowCloset from "../../images/slider/windowCloset.jpeg";
import room from "../../images/slider/room.jpg";
import arrowRight from "../../images/arrowRight.svg";
import arrowLeft from "../../images/arrowLeft.svg";

const Slider = () => {
	return (
		<section
			id='default-carousel'
			className='relative w-full h-96 mt-5 mb-2'
			data-carousel='slide'>
			<div class='relative h-56 overflow-hidden rounded-lg md:h-96'>
				<div class='hidden duration-700 ease-in-out' data-carousel-item>
					<img
						src={glassHouseFirst}
						class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
						alt='...'></img>
				</div>
			</div>
			<img
				src={arrowRight}
				alt='arrow'
				className='arrow__btn right-1 top-1/2'></img>
			<div className='absolute top-2 h-20 w-1/3 bg-red rounded-r-full border-black border-4 border-l-2 z-10'>
				<h1 className='text-3xl font-bold'>{sliderTitle}</h1>
			</div>
			<img
				src={arrowLeft}
				alt='arrow'
				className='arrow__btn left-1 top-1/2'></img>
		</section>
	);
};

export default Slider;
