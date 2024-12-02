import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import FullSizePhoto from "./components/FullSizePhoto/FullSizePhoto";
import { useEffect } from "react";
import RoolRequestForm from "./components/RoolRequestForm/RoolRequestForm";

function App() {
	const imgPopupReducer = useSelector((state) => state.imgPopupReducer);
	const modalReducer = useSelector((state) => state.modalReducer);
	const requestFormReducer = useSelector((state) => state.requestFormReducer);

	// useEffect(() => {
	// 	console.log(requestFormReducer);
	// }, [requestFormReducer]);

	return (
		<div className='app'>
			<Header />
			{/* <Main /> */}
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
