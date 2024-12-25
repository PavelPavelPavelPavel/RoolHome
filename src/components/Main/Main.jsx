import { lazy } from "react";
import { useSelector } from "react-redux";
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const Slider = lazy(() => import("../Slider/Slider"));
const OurOffers = lazy(() => import("../OurOffers/OurOffers"));
const WorksGallery = lazy(() => import("../WorksGallery/WorksGallery"));
const Messengers = lazy(() => import("../Messengers/Messengers"));

const Main = () => {
	const modalReducer = useSelector((state) => state.modalReducer);
	return (
		<main className='w-full flex flex-col px-2 min-h-80'>
			<Slider />
			<OurOffers />
			<AboutUs />
			<WorksGallery />
			{!modalReducer.isOpened && <Messengers />}
		</main>
	);
};

export default Main;
