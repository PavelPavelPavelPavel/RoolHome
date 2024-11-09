import { useEffect, useCallback, useState } from "react";
import { slider } from "../../constants/images";
import { sliderTitle } from "../../constants/constants";
import { timerDelayForSlider } from "../../constants/stateConstants";
import arrowRight from "../../images/arrowRight.svg";
import arrowLeft from "../../images/arrowLeft.svg";

const Slider = () => {
	const emergenceStyleOne = "animate-pulseBg";
	const emergenceStyleTwo = "animate-pulseBgSecond";
	const [emergenceStyle, setEmergenceStyle] = useState(emergenceStyleOne);
	const [slideNum, setSlideNum] = useState(0);

	useEffect(() => {
		// console.log();
		// setImgStyle(opacityFullVision);
	}, []);

	useEffect(() => {
		let sliderId = setTimeout(function delay() {
			nextSlide();
			sliderId = setTimeout(delay, timerDelayForSlider);
			clearTimeout(sliderId);
		}, timerDelayForSlider);
	}, [slideNum]);

	function nextSlide() {
		emergenceStyle === emergenceStyleOne
			? setEmergenceStyle(emergenceStyleTwo)
			: setEmergenceStyle(emergenceStyleOne);
		if (slideNum === slider.length - 1) {
			setSlideNum(0);
		} else {
			setSlideNum(slideNum + 1);
		}
	}

	return (
		<section className='relative h-[500px] mt-5 mb-2 rounded-md overflow-hidden'>
			<div
				className={`absolute top-0 left-0 right-0 bottom-0 ${emergenceStyle} z-10`}></div>
			<img
				className={`object-cover w-full h-full`}
				src={require(`${process.env.REACT_APP_SLIDER_GALLARY_URL}${slider[slideNum]}`)}
				alt={"work example"}></img>
			<div className='absolute top-4 h-20 w-5/12 bg-red/40 rounded-r-md z-50 overflow-hidden'>
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
