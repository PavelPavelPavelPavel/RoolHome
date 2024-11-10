import { useSelector, useDispatch } from "react-redux";
import { addModalAction } from "../../store/modalReducer";
import closeBtn from "../../images/closeBtn.svg";

const Modal = ({ children }) => {
	const dispatch = useDispatch();

	function handleCloseImg() {
		dispatch(addModalAction(false));
	}

	return (
		<div className='flex flex-col items-center justify-center w-full h-full bg-opacity-70 bg-black fixed top-0 z-50'>
			<button
				src={closeBtn}
				className='transition-transform duration-300 absolute top-2 right-2 w-10 h-10 hover:duration-300 hover:scale-110 active:scale-95'
				onClick={() => {
					handleCloseImg();
				}}>
				<img src={closeBtn} alt='close button' />
			</button>
			{children}
		</div>
	);
};

export default Modal;
