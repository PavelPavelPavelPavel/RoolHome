import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Messengers from "./components/Messengers/Messengers";
import FullSizePhoto from "./components/FullSizePhoto/FullSizePhoto";
import { useEffect, lazy, Suspense } from "react";
import RoolRequestForm from "./components/RoolRequestForm/RoolRequestForm";
const Main = lazy(() => import("./components/Main/Main"));

function App() {
	const imgPopupReducer = useSelector((state) => state.imgPopupReducer);
	const modalReducer = useSelector((state) => state.modalReducer);
	const requestFormReducer = useSelector((state) => state.requestFormReducer);

	return (
		<div className='app'>
			<Header />
			<Suspense fallback={<p>Loading...</p>}>
				<Main />
			</Suspense>
			<Footer />
			{imgPopupReducer.isOpened && modalReducer.isOpened && (
				<FullSizePhoto />
			)}
			{requestFormReducer.isOpened && modalReducer.isOpened && (
				<RoolRequestForm />
			)}
		</div>
	);
}

export default App;
