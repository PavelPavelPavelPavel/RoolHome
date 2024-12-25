import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
// import AboutUs from "../AboutUs/AboutUs";
// import Slider from "../Slider/Slider";
// import OurOffers from "../OurOffers/OurOffers";
// import WorksGallery from "../WorksGallery/WorksGallery";
// import Messengers from "../Messengers/Messengers";
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
