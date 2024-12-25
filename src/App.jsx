import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainLoader from "./components/Loaders/MainLoader/MainLoader";
const Main = lazy(() => import("./components/Main/Main"));
const FullSizePhoto = lazy(() =>
	import("./components/FullSizePhoto/FullSizePhoto")
);
const RoolRequestForm = lazy(() =>
	import("./components/RoolRequestForm/RoolRequestForm")
);

function App() {
	const imgPopupReducer = useSelector((state) => state.imgPopupReducer);
	const modalReducer = useSelector((state) => state.modalReducer);
	const requestFormReducer = useSelector((state) => state.requestFormReducer);

	return (
		<div className='app'>
			<Header />
			<Suspense
				fallback={
					<div>
						<MainLoader />
					</div>
				}>
				<Main />
			</Suspense>
			<Footer />
			{imgPopupReducer.isOpened && modalReducer.isOpened && (
				<Suspense
					fallback={
						<div>
							<MainLoader />
						</div>
					}>
					<FullSizePhoto />
				</Suspense>
			)}
			{requestFormReducer.isOpened && modalReducer.isOpened && (
				<Suspense fallback={<MainLoader />}>
					<RoolRequestForm />
				</Suspense>
			)}
		</div>
	);
}

export default App;
