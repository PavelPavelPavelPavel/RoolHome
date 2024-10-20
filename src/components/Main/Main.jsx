import AboutUs from "../AboutUs/AboutUs";
import Slider from "../Slider/Slider";
import OurOffers from "../OurOffers/OurOffers";

const Main = () => {
	return (
		<main className='w-full flex flex-col px-2 min-h-80 '>
			{/* <Slider /> */}
			<OurOffers />
			<AboutUs />
		</main>
	);
};

export default Main;
