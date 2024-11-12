import { useSelector, useDispatch } from "react-redux";
import { addModalAction } from "../../store/modalReducer";
import closeBtn from "../../images/closeBtn.svg";
import { toggleFullSizeImgAction } from "../../store/imgPopupReducer";
import { requestFormAction } from "../../store/requestFormReducer";
const Modal = ({ children }) => {
	const dispatch = useDispatch();

	function handleCloseImg() {
		dispatch(addModalAction(false));
		dispatch(
			toggleFullSizeImgAction({
				isOpened: false,
			})
		);
		dispatch(
			requestFormAction({
				isOpened: false,
			})
		);
	}

	return (
		<div className='flex flex-col items-center justify-center w-full h-full bg-opacity-90 bg-black fixed top-0 z-40'>
			<button
				src={closeBtn}
				className='rounded-full transition-transform duration-300 absolute top-2 right-2 hover:duration-300 hover:scale-110 active:scale-95'
				onClick={() => {
					handleCloseImg();
				}}>
				<img className='w-14 h-14' src={closeBtn} alt='close button' />
			</button>
			{children}
		</div>
	);
};

export default Modal;
