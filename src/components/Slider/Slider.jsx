import { useEffect, useState } from "react";
import { slider } from "../../constants/images";
import { sliderTitle } from "../../constants/constants";
import {
	timerDelayForSlider,
	emergenceStyleOne,
	emergenceStyleTwo,
} from "../../constants/stateConstants";

const Slider = () => {
	const [emergenceStyle, setEmergenceStyle] = useState(emergenceStyleOne);
	const [slideNum, setSlideNum] = useState(0);

	useEffect(() => {
		let sliderId = setTimeout(function delay() {
			sliderId = setTimeout(delay, timerDelayForSlider);
			emergenceStyle === emergenceStyleOne
				? setEmergenceStyle(emergenceStyleTwo)
				: setEmergenceStyle(emergenceStyleOne);
			nextSlide();
			clearTimeout(sliderId);
		}, timerDelayForSlider);
	}, [slideNum]);

	function nextSlide() {
		if (slideNum === slider.length - 1) {
			setSlideNum(0);
		} else {
			setSlideNum(slideNum + 1);
		}
	}

	return (
		<section className='flex items-center relative dark:border-2 dark:border-darkgray lg:h-[500px] md:h-[400px] sm:h-[300px] mt-5 mb-2 rounded-md overflow-hidden'>
			<img
				className={`object-cover w-full h-full ${emergenceStyle}`}
				src={require(`../../images/slider/${slider[slideNum]}`)}
				alt={"work example"}></img>
			<div className='absolute top-4 sm:h-1/6 xs:min-h-[48px] xs:2/6 w-5/12 bg-red/40 rounded-r-md z-30 overflow-hidden '>
				<h1 className='pr-5 lg:text-3xl md:text-2xl sm:text-xl xs:leading-5 sm:leading-6 xs:text-md text-white dark:text-gray font-bold text-right'>
					{sliderTitle}
				</h1>
			</div>
		</section>
	);
};

export default Slider;
