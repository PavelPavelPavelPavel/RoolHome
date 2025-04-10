import { useState, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer";
import MainLoader from "./components/MainLoader/MainLoader";
const Main = lazy(() => import("./components/Main/Main"));
const FullSizePhoto = lazy(() =>
	import("./components/FullSizePhoto/FullSizePhoto")
);
const RoolRequestForm = lazy(() =>
	import("./components/RoolRequestForm/RoolRequestForm")
);

function App() {
	const [isLoading, setIsLoading] = useState();
	const imgPopupReducer = useSelector((state) => state.imgPopupReducer);
	const modalReducer = useSelector((state) => state.modalReducer);
	const requestFormReducer = useSelector((state) => state.requestFormReducer);

	function setLoadingState(value) {
		setIsLoading(value);
	}

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
				<Suspense fallback={<div></div>}>
					<FullSizePhoto />
				</Suspense>
			)}
			<Suspense fallback={<div></div>}>
				{requestFormReducer.isOpened && modalReducer.isOpened && (
					<RoolRequestForm />
				)}
			</Suspense>
		</div>
	);
}

export default App;
