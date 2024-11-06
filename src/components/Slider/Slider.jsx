import { useEffect, useReducer, useState } from "react";
import { slider } from "../../constants/images";
import { sliderTitle } from "../../constants/constants";
import { timerDelayForSlider } from "../../constants/stateConstants";
import arrowRight from "../../images/arrowRight.svg";
import arrowLeft from "../../images/arrowLeft.svg";

const Slider = () => {
	const [slideNum, setSlideNum] = useState(0);
	const [opacityValue, setOpacityValue] = useState({
		opacity: 100,
		duration: 0,
	});

	useEffect(() => {
		let sliderId = setTimeout(function delay() {
			nextSlide();
			sliderId = setTimeout(delay, timerDelayForSlider);
			clearTimeout(sliderId);
		}, timerDelayForSlider);
	}, [slideNum]);

	function nextSlide() {
		if (slideNum === slider.length - 1) setSlideNum(0);
		else setSlideNum(slideNum + 1);
	}

	return (
		<section className='relative h-[500px] mt-5 mb-2 rounded-md overflow-hidden'>
			<img
				className={`object-cover w-full h-full transition-opacity duration-${opacityValue.duration} opacity-${opacityValue.opacity}`}
				src={require(`${process.env.REACT_APP_SLIDER_GALLARY_URL}${slider[slideNum]}`)}
				alt={"work example"}></img>
			<div className='absolute top-4 h-20 w-5/12 bg-red/40 rounded-r-md z-10 overflow-hidden'>
				<h1 className='pr-5 text-3xl font-bold text-right'>
					{sliderTitle}
				</h1>
			</div>
		</section>
	);
};

export default Slider;

// let sliderPhoto = slider;
// const [slideNum, setSlideNum] = useState(0);
// const [translate, setTranslate] = useState("");

// useEffect(() => {
//     setTranslate("translate-x-full");
//     let timer = setTimeout(() => {
//         nextSlide();
//     }, 9000);
//     setTranslate("");
// }, [slideNum]);

// function nextSlide() {
//     if (slideNum === sliderPhoto.length - 1) setSlideNum(0);
//     else setSlideNum(slideNum + 1);
// }

// return (
//     <section className='relative h-[600px] mt-5 mb-2 overflow-hidden'>
//         <img
//             className={`object-cover w-full h-full rounded-md transition-all duration-1000 ${translate}`}
//             src={require(`${process.env.REACT_APP_SLIDER_GALLARY_URL}${sliderPhoto[slideNum]}`)}
//             alt={slideNum}></img>
//         <div className='absolute top-2 h-20 w-5/12 bg-red rounded-r-full border-black border-4 border-l-2 z-10 overflow-hidden'>
//             <h1 className='pr-5 text-3xl font-bold text-right'>
//                 {sliderTitle}
//             </h1>
//         </div>
//     </section>
// );
