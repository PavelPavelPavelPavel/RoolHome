import { useSelector } from "react-redux";
import AboutUs from "../AboutUs/AboutUs";
import Slider from "../Slider/Slider";
import OurOffers from "../OurOffers/OurOffers";
import WorksGallery from "../WorksGallery/WorksGallery";
import Messengers from "../Messengers/Messengers";

const Main = () => {
	const modalReducer = useSelector((state) => state.modalReducer);
	return (
		<main className='w-full flex flex-col px-2 min-h-80'>
			<Slider />
			{/* <OurOffers />
			<AboutUs />
			<WorksGallery />
			{!modalReducer.isOpened && <Messengers />} */}
		</main>
	);
};

export default Main;
