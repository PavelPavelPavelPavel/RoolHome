import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import FullSizePhoto from "./components/FullSizePhoto/FullSizePhoto";
import Modal from "./components/Modal/Modal";
import { useEffect } from "react";
// import Test from "./components/Test";

function App() {
	const toggleModal = useSelector((state) => state.modalReducer);

	return (
		<div className='app'>
			{/* <Test /> */}
			<Header />
			<Main />
			<Footer />
			{toggleModal.isOpened && <FullSizePhoto />}
		</div>
	);
}

export default App;
