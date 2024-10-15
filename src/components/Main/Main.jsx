import AboutUs from "../AboutUs/AboutUs";
import Slider from "../Slider/Slider";

const Main = () => {
	return (
		<main className='w-full flex flex-col px-2 min-h-80 '>
			<Slider />
			<AboutUs />
		</main>
	);
};

export default Main;
