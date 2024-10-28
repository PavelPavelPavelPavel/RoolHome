import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import FullSizePhoto from "./components/FullSizePhoto/FullSizePhoto";
import { addModalAction, toggleImgPopupAction } from "./store/modalReducer";
import { useEffect } from "react";

function App() {
	const toggleImgPopup = useSelector((state) => state.imgPopupReducer);

	return (
		<div className='app'>
			<Header />
			<Main />
			<Footer />
			{toggleImgPopup.isOpened && <FullSizePhoto />}
		</div>
	);
}

export default App;
