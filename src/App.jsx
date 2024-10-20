import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { addModalAction } from "./store/modalReducer";
import { useEffect } from "react";

function App() {
	const togglePopup = useSelector((state) => state.modalReducer.isOpened);

	return (
		<div className='app'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
