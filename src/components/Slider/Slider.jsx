import { useEffect, useReducer, useState } from "react";
import { slider } from "../../constants/images";
import { sliderTitle } from "../../constants/constants";
import arrowRight from "../../images/arrowRight.svg";
import arrowLeft from "../../images/arrowLeft.svg";

const Slider = () => {};

export default Slider;

// let sliderPhoto = slider;
// 	const [slideNum, setSlideNum] = useState(0);

// 	// useEffect(() => {
// 	// 	let timer = setTimeout(() => {
// 	// 		nextSlide();
// 	// 	}, 9000);
// 	// }, [slideNum]);

// 	function previousSlide() {
// 		if (slideNum === 0) setSlideNum(sliderPhoto.length - 1);
// 		else setSlideNum(slideNum - 1);
// 	}

// 	function nextSlide() {
// 		if (slideNum === sliderPhoto.length - 1) setSlideNum(0);
// 		else setSlideNum(slideNum + 1);
// 	}

// 	return (
// 		<section className='relative h-[600px] mt-5 mb-2 '>
// 			<img
// 				className='object-cover w-full h-full rounded-md'
// 				src={require(`${process.env.REACT_APP_SLIDER_GALLARY_URL}${sliderPhoto[slideNum]}`)}
// 				alt={slideNum}></img>
// 			<div className='absolute top-2 h-20 w-1/3 bg-red rounded-r-full border-black border-4 border-l-2 z-10'>
// 				<h1 className='text-3xl font-bold'>{sliderTitle}</h1>
// 			</div>
// 			<button onClick={nextSlide}>
// 				<img
// 					src={arrowRight}
// 					alt='arrow'
// 					className='arrow__btn right-1 top-1/2'></img>
// 			</button>
// 			<button onClick={previousSlide}>
// 				<img
// 					src={arrowLeft}
// 					alt='arrow'
// 					className='arrow__btn left-1 top-1/2'></img>
// 			</button>
// 		</section>
// 	);
