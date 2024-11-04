import { useEffect, useReducer, useState } from "react";
import { slider } from "../../constants/images";
import { sliderTitle } from "../../constants/constants";
import arrowRight from "../../images/arrowRight.svg";
import arrowLeft from "../../images/arrowLeft.svg";

const Slider = () => {
	return (
		<section className='relative h-[90vh] mt-5 mb-2'>
			<ul className='w-full h-full overflow-hidden flex'>
				{slider.map((photo) => {
					console.log(photo);
					return (
						<li
							id={crypto.randomUUID()}
							className='w-full h-full min-w-full animate-infinite-scroll animate-delay-1000'>
							<img
								className={`object-cover w-full h-full`}
								src={require(`${process.env.REACT_APP_SLIDER_GALLARY_URL}${photo}`)}
								alt='background'></img>
						</li>
					);
				})}
			</ul>
			<div className='absolute top-2 h-20 w-5/12 bg-red/40 shadow-md rounded-r-md z-10 overflow-hidden'>
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
